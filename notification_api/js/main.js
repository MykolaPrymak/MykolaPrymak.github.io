function showNtf(data) {
    var rnd = Math.random();
    var icon_id = $('#icon').val() || ((rnd < 1) ? '0' : '') + (parseInt(rnd * 10))

    data = $.extend({
        title: $('#title').val(),
        body: $('#body').val(),
        tag: $('#tag').val() || 'msg_' + icon_id,
        icon: 'img/avatar_' + icon_id + '.jpg'
    }, data || {});
    Notify(data.title, data);
    return;
    var notify = new Notify(data.title, data);

    var startTime = (new Date()).getTime();
    $(notify).on('show', function(){startTime = (new Date()).getTime();});
    $(notify).on('close', function(evt){
        //console.log('ntf close');
        console.log('ntf close after ', (((new Date()).getTime() - startTime) / 1000).toFixed(3), 's');
        cancelEvent(evt);
    });
    $(notify).on('click', function(){
        //console.log('ntf click');
    });
    
    console.log(icon_id);
}

function makeRndNtf(){
    var
        words = ["світлина", "люстерко", "гойдалка", "цвях", "хробак", "кватирка", "дармовис", "каблучка", "напiрник", "канапка", "ватра", "мушля", "милиця", "фіранка", "горнятко", "філіжанка", "аргумент", "оригінальний", "числе?нний", "бароко", "вища", "світліший", "найзначніше", "понад сто", "більш ніж як сто", "будь ласка", "деякою мірою", "певною мірою", "веб-сайт", "провідний інженер", "тяговий механізм", "військовик", "відміняти іменники", "але", "скасувати", "скасовувати", "стосунок", "мати стосунок", "стосуватись", "перепрошувати", "просити пробачення", "даруйте на слові", "вибачте", "видаляти", "зуб", "вилучати статтю", "виняток", "виконувач", "домінантний", "зрештою", "урешті-решт", "врешті-решт", "мати здатність", "бути здатним", "опанувати", "опановувати правопис", "Голландія", "голландський", "Нідерланди", "нідерландський", "головнокомандувач", "гранат", "ґрунт", "далекосяжний", "дивізіону", "див. також", "діяльності", "завідувач", "голова", "старший", "начальник", "іон", "інший", "ілюстрація", "кіно", "фільму", "кооперативу", "мати попит", "будь-які", "магніт", "навчати грамоти", "нарешті", "щодо", "прийдешній", "що надходить", "такий", "навколишній", "довколишній", "навкружний", "переїжджає", "під час", "інф. + далі", "триває посадка", "і на протязі", "і протягом одного дня", "упередженість", "перейменування", "надсилати на адресу", "майданчик", "принаймні", "по понеділках", "по місцях", "по роках…", "Пруссія", "прусський", "пункту", "парафіян", "вважати", "мати думку", "району", "реґі", "регі", "ринґтон", "рингтон", "розташований за 50 км на північ від столиці", "найбільший", "скористайтесь", "треба нести", "шукати", "працювати", "наступний", "такий", "збігатися", "статей", "статтею", "щодо", "скло", "по суті", "оскільки", "позаяк", "як-от", "територія", "тонна", "тонн", "торговельний", "стосуватися", "узбережжя", "хімія", "шведський", "широкосмуговий", "сингл", "навчальний", "журі", "Польща", "каньйон", "п'ятнадцять осіб", "завдати удару"],
        counjuctions = ["адже", "аніж", "втім", "зате", "мовби", "мовбито", "начеб", "начебто", "немов", "немовби", "немовбито", "неначе", "неначебто", "ніби", "нібито", "ніж", "отже", "отож", "притім", "притому", "причім", "причому", "проте", "себто", "тобто", "цебто", "щоб", "якби", "якщо", "а також", "абощо", "тощо", "би", "б", "ж", "же", "дарма що", "для того щоб", "замість того щоб", "з тим щоб", "з того часу як", "попри те що", "після того як", "при цьому", "та й", "так що", "тим часом як", "тому що", "у міру того як", "через те що", "отож-то", "тим-то", "тільки-но", "тому-то"],
        random = Math.random,
        round = Math.round,
        //word_count = round((words.length / 2) * random()),
        word_count  = 10,
        i,
        flood = []
    ;
    // Set the minimum words count
    word_count = Math.max(10, word_count);
    for (i = word_count; i-- > 0;) {
        flood.push(words[round((words.length - 1) * random())]);
        if (random() > 0.8) {
            flood.push(counjuctions[round((words.length - 1) * random())]);
        }
    }
    return {title: words[round((words.length - 1) * random())], body: flood.join(' ')};
}

var rndTimer;
function showRndNtf() {
    rndTimer = setTimeout(function() {
        showRndNtf();
        showNtf(makeRndNtf());
    }, Math.random() * 5000);
}

function log(msg) {
    $('.logItems')
        .append('<div>[' + ((new Date()).toTimeString().split(' ')[0]) + '] ' + msg + '</div>')
        .prop('scrollTop', $('.logItems').prop('scrollHeight'));
}

function updateStatus(permission) {
    var $status =  $('#status').removeClass('error', 'succsess');
    $('.sendForm button').prop('disabled', true).show();
    $('#requestPermission').addClass('hidden');
    if (!window.Notification) {
       $status.addClass('error').text('Notification API is not supported!!!');
    } else {
        $status.text('Permission ' + permission);
        if (permission === 'denied') {
            $status.addClass('error');
        } else if (permission === 'granted'){
            $status.addClass('succsess');
            $('.sendForm button').prop('disabled', false);
        } else {
            $('.sendForm button').hide();
            $('#requestPermission').removeClass('hidden').show().prop('disabled', false);
        }
    }
}
$(document).ready(function () {
    //console.log(Notification.permission)
    $('#showNotify').click(showNtf);
    $('#showRndNotify').click(function(evt) {
        if ($(this).hasClass('btn-warning')) {
            showRndNtf();
            $(this).text('Stop generation');
        } else {
            clearTimeout(rndTimer);
            $(this).text('Generate random');
        }
        $(this).toggleClass('btn-warning btn-danger');
    });
    if (!!window.Notification) {
        log('Notification API is supported')
    }
    $('#requestPermission').click(function() {
        $(document).trigger('notification:request');
    });

    $(document).on('notification:permission', function(evt){
        console.log('notification:permission');
        updateStatus(evt.permission);
    });
    $(document).on('notification:show', function(){
        console.log('notification:show');
    });
});
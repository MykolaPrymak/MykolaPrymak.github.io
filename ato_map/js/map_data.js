define(function() {
  var map_data = [
    {
      date: '08.07.2014',
      map: 'http://gdb.rferl.org/1167000A-ED63-42DE-AF7D-8222AD43652A_w974_n_s_s.jpg'
    },{
      date: '09.07.2014',
      map: 'http://gdb.rferl.org/6CFB7D40-4A42-48F9-9D23-CEB1ACD9160C_w974_n_s_s.jpg'
    },{
      date: '10.07.2014',
      map: 'http://gdb.rferl.org/172F29E6-6D0D-4794-ABC5-42B9BC31C330_w974_n_s_s.jpg'
    },{
      date: '11.07.2014',
      map: 'http://gdb.rferl.org/56F4A84A-4481-483B-B9CF-D0CFD19B72AD_w974_n_s_s.jpg'
    },{
      date: '12.07.2014',
      map: 'http://gdb.rferl.org/816180FC-0933-46AD-851A-81B36AEFF975_w974_n_s_s.jpg'
    },{
      date: '13.07.2014',
      map: 'http://gdb.rferl.org/E46A8C1E-50AD-4BE3-8D3F-4B13B9769A78_w974_n_s_s.jpg'
    },{
      date: '14.07.2014',
      map: 'http://gdb.rferl.org/F568C2D9-7BEE-44A6-A384-45059C60A7E6_w974_n_s_s.png'
    },{
      date: '15.07.2014',
      map: 'http://gdb.rferl.org/B4E5DBD8-1B7B-41AE-8280-D39ED977C3C4_w974_n_s_s.jpg'
    },{
      date: '16.07.2014',
      map: 'http://gdb.rferl.org/C134D085-6C1F-45E6-BD4C-FA96067C0F99_w974_n_s_s.png'
    },{
      date: '17.07.2014',
      map: 'http://gdb.rferl.org/A18E8EAD-04DB-4EBB-892E-1EAA82655E00_w974_n_s_s.jpg'
    },{
      date: '18.07.2014',
      map: 'http://gdb.rferl.org/69CCAD96-D1DB-4F66-8455-41C079FCAC83_w974_n_s_s.jpg'
    },{
      date: '19.07.2014',
      map: 'http://gdb.rferl.org/DB9E1D27-21D5-460E-AD1C-AAAD5D624ACF_w974_n_s_s.png'
    },{
      date: '20.07.2014',
      map: 'http://gdb.rferl.org/C8644757-FB8C-4D62-B299-A224C2EDFAC1_w974_n_s_s.png'
    },{
      date: '21.07.2014',
      map: 'http://gdb.rferl.org/5C8BD632-962A-4454-80B7-08488C5B0C5E_w974_n_s_s.png'
    },{
      date: '22.07.2014',
      map: 'http://gdb.rferl.org/39B585B6-75D1-42D6-8C3E-9C5E0597119A_w974_n_s_s.png'
    },{
      date: '23.07.2014',
      map: 'http://gdb.rferl.org/A5A137EF-5B1A-417D-8AFE-CF11153A2D1D_w974_n_s_s.jpg'
    },{
      date: '24.07.2014',
      map: 'http://gdb.rferl.org/C8C029CD-FCFA-406C-8F84-AE7C011497E2_w974_n_s_s.jpg'
    },{
      date: '25.07.2014',
      map: 'http://gdb.rferl.org/92F10F29-D2B1-438A-BAFF-D8EDFB2D563B_w974_n_s_s.jpg'
    },{
      date: '27.07.2014',
      map: 'http://gdb.rferl.org/53A8FEFA-3EC5-4818-A777-B76B206953BC_w974_n_s_s.jpg'
    },{
      date: '28.07.2014',
      map: 'http://gdb.rferl.org/30A58298-00D8-4F09-A83B-5655358277AE_w974_n_s_s.jpg'
    },{
      date: '29.07.2014',
      map: 'http://gdb.rferl.org/D4FB19DE-7B62-4CF9-B032-F95A42601447_w974_n_s_s.jpg'
    },{
      date: '30.07.2014',
      map: 'http://gdb.rferl.org/7BF3E441-0FB0-4B68-8C8D-0C977ECB9C19_w974_n_s_s.jpg'
    },{
      date: '31.07.2014',
      map: 'http://gdb.rferl.org/C3A4D7B1-88B1-49E7-A205-22ECF8C50549_w974_n_s_s.jpg'
    },{
      date: '01.08.2014',
      map: 'http://gdb.rferl.org/E2B8C9A1-62AC-4806-A95A-728A3F42D7E9_w974_n_s_s.jpg'
    },{
      date: '02.08.2014',
      map: 'http://gdb.rferl.org/4BFCE34B-FB03-46BF-AFB2-E1FC929249F7_w974_n_s_s.jpg'
    },{
      date: '03.08.2014',
      map: 'http://gdb.rferl.org/39F3563E-A3D6-4486-942E-39B49112A838_w974_n_s_s.jpg'
    },{
      date: '04.08.2014',
      map: 'http://gdb.rferl.org/546D1019-55D3-432A-80F1-5F4BF39319D2_w974_n_s_s.jpg'
    },{
      date: '05.08.2014',
      map: 'http://gdb.rferl.org/D57E176B-781F-4B23-8404-4D6A0CB11673_w974_n_s_s.jpg'
    },{
      date: '06.08.2014',
      map: 'http://gdb.rferl.org/B499F3F5-A131-45E0-B64E-A412DBAE44B4_w974_n_s_s.jpg'
    },{
      date: '07.08.2014',
      map: 'http://gdb.rferl.org/F6ABB592-6F8E-4B2E-AF0B-2B7F8ACC2E51_w974_n_s_s.jpg'
    },{
      date: '08.08.2014',
      map: 'http://gdb.rferl.org/81AEF42E-3EEE-447A-AECA-74B5A132AFE2_w974_n_s_s.jpg'
    },{
      date: '09.08.2014',
      map: 'http://gdb.rferl.org/31D0BE9A-C62A-47D6-A95D-345AC1476FA8_w974_n_s_s.jpg'
    },{
      date: '10.08.2014',
      map: 'http://gdb.rferl.org/7CA1AC19-8823-41DA-8874-AEA0F47FDF9F_w974_n_s_s.jpg'
    },{
      date: '11.08.2014',
      map: 'http://gdb.rferl.org/365E67D8-0D4B-48F5-BEEA-02D0501DF92C_w974_n_s_s.jpg'
    },{
      date: '12.08.2014',
      map: 'http://gdb.rferl.org/2E8B8537-BFB1-48D7-B012-34B704E394BE_w974_n_s_s.jpg'
    },{
      date: '13.08.2014',
      map: 'http://gdb.rferl.org/55B5E7F2-E794-4786-9CDC-A61CC7ACE664_w974_n_s_s.jpg'
    },{
      date: '14.08.2014',
      map: 'http://gdb.rferl.org/422A4C30-C76C-4B78-B02A-710F8D996A2F_w974_n_s_s.jpg'
    },{
      date: '15.08.2014',
      map: 'http://gdb.rferl.org/32E8AF75-4A3E-47E2-8E80-C51A2FFB935E_w974_n_s_s.jpg'
    },{
      date: '16.08.2014',
      map: 'http://gdb.rferl.org/94A94681-E07E-408F-8227-B6B6E63C5772_w974_n_s_s.jpg'
    },{
      date: '17.08.2014',
      map: 'http://gdb.rferl.org/CCA37DA1-ABA4-4EB6-870F-1A4029FEA704_w974_n_s_s.jpg'
    },{
      date: '18.08.2014',
      map: 'http://gdb.rferl.org/FAE892C7-F53A-4E8A-A9B2-ECDD37A78F03_w974_n_s_s.png'
    },{
      date: '19.08.2014',
      map: 'http://gdb.rferl.org/F65DDC0D-83E4-47C1-AECF-1BDD4B6E02B9_w974_n_s_s.jpg'
    },{
      date: '20.08.2014',
      map: 'http://gdb.rferl.org/0C28676B-3A8E-4E8D-84AF-EB9E60CA7968_w974_n_s_s.jpg'
    },{
      date: '21.08.2014',
      map: 'http://gdb.rferl.org/E9A769FB-B10D-47A6-B8CD-0AD0E11E2A96_w974_n_s_s.jpg'
    },{
      date: '22.08.2014',
      map: 'http://gdb.rferl.org/FED45171-4610-4397-B464-0950D468FD2D_w974_n_s_s.jpg'
    },{
      date: '23.08.2014',
      map: 'http://gdb.rferl.org/5C8A3BB8-BD6D-48AD-9C01-E061815EBAD4_w974_n_s_s.jpg'
    },{
      date: '24.08.2014',
      map: 'http://gdb.rferl.org/888DA0D2-2E72-41C5-9013-FBE0429AB0FE_w974_n_s_s.png'
    },{
      date: '25.08.2014',
      map: 'http://gdb.rferl.org/17D3AD3A-3197-4626-8675-CFBAB6A6C602_w974_n_s_s.jpg'
    },{
      date: '26.08.2014',
      map: 'http://gdb.rferl.org/50CF05F0-0F73-4766-AD18-A4C80E7F4458_w974_n_s_s.jpg'
    },{
      date: '27.08.2014',
      map: 'http://gdb.rferl.org/AC16FB87-28B8-417E-A66F-E79172EA84F0_w974_n_s_s.jpg'
    },{
      date: '28.08.2014',
      map: 'http://gdb.rferl.org/4B2D494B-E470-4B5B-9102-7A96EB07BECB_w974_n_s_s.jpg'
    },{
      date: '29.08.2014',
      map: 'http://gdb.rferl.org/CB1A9BD7-2AC6-4627-9868-A6E9AF16A70E_w974_n_s_s.jpg'
    },{
      date: '30.08.2014',
      map: 'http://gdb.rferl.org/613A17B3-380E-4C81-9848-0D47D4FB33B2_w974_n_s_s.jpg'
    },{
      date: '31.08.2014',
      map: 'http://gdb.rferl.org/CFDF2511-953E-4051-8545-92252CDEC069_w974_n_s_s.jpg'
    },{
      date: '01.09.2014',
      map: 'http://gdb.rferl.org/A8A060DE-0801-436C-880E-686FB7911D87_w974_n_s_s.jpg'
    },{
      date: '02.09.2014',
      map: 'http://gdb.rferl.org/3F4D3B07-617A-454A-9636-819BDD023599_w974_n_s_s.jpg'
    },{
      date: '03.09.2014',
      map: 'http://gdb.rferl.org/D6D0E8CD-53EF-4398-B51E-2DF6D08E5241_w974_n_s_s.jpg'
    },{
      date: '04.09.2014',
      map: 'http://gdb.rferl.org/B8BBF4F2-06DB-4D4C-A33C-D6B48174F042_w974_n_s_s.jpg'
    },{
      date: '05.09.2014',
      map: 'http://gdb.rferl.org/C8CFB607-4157-4C8E-9EB2-5F9A053E649D_w974_n_s_s.jpg'
    }
  ];
  return map_data;
});
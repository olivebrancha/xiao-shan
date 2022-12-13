// miniprogram/pages/Choose_Type/Choose_Type.js
Page({

  data: {

  },

  onLoad: function (options) {
   
  },
  Touch:function(e){
    //console.log(parseInt(e.currentTarget.dataset.touch_id))//点击的对应的事件

    //1-学习生活 2心情 3恋爱 交易 4图书 5家电数码 6美妆闲置
    let Temp_Type;
    let item = parseInt(e.currentTarget.dataset.touch_id);
    // 物品种类 若要完成发帖功能 修改下面if/else逻辑
    switch (item){
      case 1:Temp_Type = "运动类";break;
      case 2: Temp_Type = "生活用品类";break;
      case 3: Temp_Type = "卡片证件类";break;
      case 4: Temp_Type = "电子设备类";break;
      case 5: Temp_Type = "学习用品类";break;
      case 6: Temp_Type = "衣物鞋子类";break;
      case 7: Temp_Type = "食品外卖类";break;
      case 8: Temp_Type = "美妆闲置";break;
      case 9: Temp_Type = "其他";break;
    }
    wx.setStorage({
      key: 'PostType',
      data: Temp_Type,
    })

    // Creat_Sell_post 是发布物品
    if(item>=1 && item<=9){
      wx.navigateTo({
        url: '../Creat_Sell_post/Creat_Sell_post',
      })
    }

    // Creat_Topic 是发帖功能
/*     else{
      wx.navigateTo({
        url: '../Creat_Topic/Creat_Topic',
      })
    } */


  },

 
})
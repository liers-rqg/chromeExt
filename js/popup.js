// $(function(){
//     $('#input1').keyup(function(){
//         $('#message').text('你好，'+$('#input1').val());
//     });
// })
$(function(){
    $('#add').click(function(){
        // 从浏览器中获取存储的金额
        
        chrome.storage.sync.get('total',function(buget){
            var totalAmount = 0;
            if(buget.total){
                totalAmount = parseFloat(buget.total);
            }
            //将本次金额添加到总金额内并进行存储
            var amount = $('#amount').val();
            if(amount){
                totalAmount += parseFloat(amount);
                chrome.storage.sync.set({'total':totalAmount});
            }
            //显示更新
            $('#total').text(totalAmount);
            $('#amount').val('');
        })
        
    })
})
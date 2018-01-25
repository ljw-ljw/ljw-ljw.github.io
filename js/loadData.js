 function loadData() {
    // 将本次存储的数据取出来。并显示在页面中
    // 要将多条数据一一展示出来，要对每条数据进行遍历
    for (var i = 0; i < localStorage.length; i++) {
        // 获取数据索引  获取key值
        var key = localStorage.key(i);
        // 通过key值获取value值
        var value = localStorage.getItem(key);
        addNote(key,value);
        
    }


 }

 loadData();
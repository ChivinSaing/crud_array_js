var id   = document.getElementById('id')
var Name = document.getElementById('name')
var qty  = document.getElementById('qty')
var price= document.getElementById('price')
var total = document.getElementById('total')
var btnadd= document.getElementById('btnadd')
var btnupdate= document.getElementById('btnupdate')

btnadd.style.display='flex'
btnupdate.style.display='none'
var index=0;
index++;
id.value = index;
itemList=[
    // {
    //     'Id'  : 1010,
    //     'name': 'coca',
    //     'qty' : 5,
    //     'price': 1.1,
    //     'total': 300
    // },
    // {
    //     'Id'  : 1011,
    //     'name': 'sting',
    //     'qty' : 5,
    //     'price': 1.1,
    //     'total': 300
    // },
    // {
    //     'Id'  : 1012,
    //     'name': 'coca',
    //     'qty' : 5,
    //     'price': 1.1,
    //     'total': 300
    // }
];

getData=()=>
{
    var txt=''
    txt +=`
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        `
        itemList.forEach(item => {
        txt +=`
            <tr>
                <td>${item.Id}</td>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${item.total}</td>
                <td>
                    <input type="button" id="btnupdate" value="Update" class="btn btnupdate btn-warning">
                    <input type="button" id="btndelete" value="Delete" class="btn btndelete btn-danger">
                </td>
                
            </tr>
         `
    });
    document.querySelector('.table').innerHTML =txt; 
    
    // Update 
    function mouseClicks()
    {
        var update = document.querySelectorAll('.btnupdate');
        update.forEach((e,i) => {
            e.addEventListener('click',function(){

                id.value   = itemList[i]['Id'];
                Name.value = itemList[i]['name'];
                qty.value  = itemList[i]['qty'];
                price.value= itemList[i]['price'];
                total.value= itemList[i]['total'];
                index=i;
                btnadd.style.display = 'none';
                btnupdate.style.display='flex';
            })
        });
    }
    mouseClicks();

    //  btn Delete
    var btndelete = document.querySelectorAll('.btndelete');
    btndelete.forEach((e,i)=>{
        e.addEventListener('click',function(){
            Swal.fire({
                title: "Delete Success",
                text: "Delete Data Success...",
                icon: "success"
            });
            itemList.splice(i,1);
            getData();
        })
    })
   
}
getData();

qty.addEventListener('keyup',function(){
    total.value = qty.value * price.value;
})
price.addEventListener('keyup',function(){
    total.value = qty.value * price.value
})

// add data to table
    btnadd.addEventListener('click',function(){
        // alert(123) 
        if(id.value !="" && Name.value !="" && qty.value!="" && price !="" && total.value !="")
        {
            Swal.fire({
                title: "Success",
                text: "Add Data Success...",
                icon: "success"
            });
            itemList.push(
                {
                    'Id'   :id.value,
                    'name' : Name.value,
                    'qty'  : qty.value,
                    'price' : price.value,
                    'total' : total.value,
                }
            );
            
            index = index+1;
            id.value = index;
            getData(); 
            clearField()
        }
        else{
            Swal.fire({
                title: "Error",
                text: "Add Data Not Success...",
                icon: "error"
            });
        }  
    });


clearField=()=>{
    Name.value="";
    qty.value ="";
    price.value="";
    total.value=""
}
// Btn Update
btnupdate.addEventListener('click',function(){
    Swal.fire({
        title: "Success",
        text: "Update Data Success...",
        icon: "success"
    });
    itemList[index]['Id']  = id.value;
    itemList[index]['name']= Name.value;
    itemList[index]['qty'] = qty.value;
    itemList[index]['price']= price.value;
    itemList[index]['total']= total.value;
    
    console.log(itemList);
    getData();
    index = itemList.length+1;
    id.value = index
    btnupdate.style.display = 'none';
    btnadd.style.display = 'flex';
    clearField();
})




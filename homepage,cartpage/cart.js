var addcartArr=JSON.parse(localStorage.getItem('makeuplist')) || []
    // console.log(addcartArr)
    displayData(addcartArr);

     
    var sum= addcartArr.reduce(function(acc,elem){
        return acc+ Number(elem.rate)
    },0)
    console.log(typeof(sum))
    console.log(sum)
    document.querySelector('#subt').append(sum)
    
    var total= sum + 100
    document.querySelector('#total').append(total)



    function displayData(data){
        data.forEach(function(elem,index){
// --------------------------// Cart items added here//----------------------------
                var hr1=document.createElement("hr")
                var hr11=document.createElement("hr")
                // set horizontal line

                var databox=document.createElement("div")
                databox.setAttribute("id","databox");

                    var productImg=document.createElement("img")
                    productImg.setAttribute("src",elem.imgurl)

                    var prdctname=document.createElement("div")
                    prdctname.innerText=elem.name;
                    prdctname.setAttribute("id","productname");

                    var prdctprice=document.createElement("p")
                    prdctprice.innerText=elem.price;
                    prdctprice.setAttribute("id","productprice");

                    var prdctqty=document.createElement("button")
                    prdctqty.innerText="1";
                    // Need to be add function in product qty
                    prdctqty.setAttribute("id","prdctqty");

                    var prdctsubtotalprice=document.createElement("p")
                    prdctsubtotalprice.innerText=elem.price;
                    // Need to be add function in product subtotal
                    prdctsubtotalprice.setAttribute("id","prdctsubtotalprice");

                var hr2=document.createElement("hr");
                // set horizontal line

                var edit=document.createElement("button")
                edit.innerText="Edit";
                // edit.addEventListener("click", function(){
                //     edititems(elem)
                // })
                edit.setAttribute("id","edit");
                
                var removeitem=document.createElement("button")
                removeitem.innerText="Remove item"
                removeitem.addEventListener("click",function(){
                    deleteItemfromCart(elem,index);
                })
                removeitem.setAttribute("id","removeitem")

                var hr3=document.createElement("hr")
                // set horizontal line

            detailsboxremaining.append(pricetag,qtytag,totaltag)
            databox.append(productImg,prdctname,prdctprice,prdctqty,prdctsubtotalprice)
            document.querySelector("#cartbox").append(hr1,databox,hr2,edit,removeitem,hr3)
        })
    }
    function deleteItemfromCart(elem,index){
        addcartArr.splice(index,1)
        localStorage.setItem("makeuplist",JSON.stringify(addcartArr));
        window.location.reload();
    }
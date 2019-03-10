function getAllIndexes(items) {
    var final = [], i,j;
    for(i=0;i<items.length;i++)
    {
        var val = items[i].itemName;
        if (val === undefined || val === null || val.length <= 0)
        {
            continue;
        }
            else
        {
   
                count=1;
                finalcount=items[i].itemnumber;
                for (j = i+1; j < items.length; j++)
                    if (items[j].itemName === val)
                        {
                            items[j].itemName = null;
                            finalcount+=items[i].itemnumber;
                        }

                        final.push({
                value:val,
                count:finalcount
        });
        }
    }
    // return value;
    return final;
    }

// var a = [{ itemName: "abhishek", itemnumber: 20 }, { itemName: "utkarsh", itemnumber: 40 }, { itemName: "abhishek", itemnumber: 20 }, { itemName: "utkarsh", itemnumber: 40 }];
// getAllIndexes(a);
module.exports=getAllIndexes;
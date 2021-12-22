const request= require("request")
const cheerio= require("cheerio");
const { Console } = require("console");
function deriveContent(url)
{
    request(url, (err, response, html)=>
    {
        if(err)
        {
            console.error();
        }
        else
        {
            fetchHTML(html)
        }
    })

    function fetchHTML(html)
    {
        const $=cheerio.load(html);
        const paragraphs=$(".mw-parser-output p")
        const subcontent=$(".mw-parser-output ul")
        const sub_subcontent=$(".mw-parser-output ul li")
        const mainHeading=$(".mw-parser-output h2 span")
        const subHeadings=$(".mw-parser-output h3 span")

        //history
        console.log($(mainHeading[0]).text())
        console.log("++++++++++++++++++++++")
        console.log("")
        for(let i=5;i<12;i++)
        {
            if(i==7)
            {
                console.log($(subHeadings[0]).text())
                console.log("............")
            }
            console.log($(paragraphs[i]).text())
        }


        //Use in writing systems
        console.log("")
        console.log($(mainHeading[1]).text())
        console.log("++++++++++++++++++++++")
        console.log("")
        console.log($(subHeadings[1]).text())
        for(let i=12;i<17;i++)
        {
            if(i==13)
            {
                for(let j=70;j<($(subcontent[17]).find("li")).length+70;j++)
                {
                    console.log(" *",($(sub_subcontent[j]).text()))
                }
            }
            if(i==15)
            {
                console.log($(subHeadings[2]).text())
                console.log("............")
            }
            if(i==16)
            {
                console.log($(subHeadings[3]).text())
                console.log("............")
            }
            console.log($(paragraphs[i]).text())
            if(i==16)
            {
                for(let j=77;j<($(subcontent[18]).find("li")).length+77;j++)
                {
                    console.log(" *",($(sub_subcontent[j]).text()))
                }
            }
        }
        

        //Other uses
        console.log("")
        console.log("")
        console.log($(mainHeading[2]).text())
        console.log("++++++++++++++++++++++")
        console.log("")
        for(let i=17;i<23;i++)
        {
            console.log($(paragraphs[i]).text())
        }
    }
}
module.exports= deriveContent;
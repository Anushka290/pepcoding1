const puppeteer= require("puppeteer")
const deriveContent=require("./derCon")
let page;
let url;
const browserOpenPromise=puppeteer.launch({
    headless:false,
    slowMo:50,
    defaultViewport:null,
    args:["--start-maximized"]
});

browserOpenPromise.then((browser)=>
{
    // console.log("browser opened")
    const pagesArrPromise=browser.pages();
    return pagesArrPromise;
}).then((browserPages)=>
{
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.wikipedia.org/")
    return gotoPromise;
}).then(()=>
{
    //english
    let eleWaitPromise=page.waitForSelector(".link-box strong",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".link-box strong")
    return clickElement;
}).then(()=>
{
    //all portals
    let eleWaitPromise=page.waitForSelector(".portal-hright.portal-vbot",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".portal-hright.portal-vbot")
    return clickElement;
}).then(()=>
{
    //a-z indexes
    let eleWaitPromise=page.waitForSelector(".hlist.noprint>ul>:last-child",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".hlist.noprint>ul>:last-child")
    return clickElement;
}).then(()=>
{
    //A
    let eleWaitPromise=page.waitForSelector("#toc tbody tr:nth-child(3)>td>b>a",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click("#toc tbody tr:nth-child(3)>td>b>a")
    return clickElement;
}).then(()=>
{
    //A
    let eleWaitPromise=page.waitForSelector(".mw-allpages-body .mw-allpages-chunk>li>a",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".mw-allpages-body .mw-allpages-chunk>li>a")
    return clickElement;
}).then(()=>
{
    //history
    let eleWaitPromise=page.waitForSelector(".toclevel-1.tocsection-1 a ",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".toclevel-1.tocsection-1 a ")
    return clickElement;
}).then(()=>
{
    //use in writing systems
    let eleWaitPromise=page.waitForSelector(".toclevel-1.tocsection-3 .toctext",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".toclevel-1.tocsection-3 .toctext")
    return clickElement;
}).then(()=>
{
    //other uses
    let eleWaitPromise=page.waitForSelector(".toclevel-1.tocsection-7 .toctext",{visible:true})
    return eleWaitPromise
}).then(()=>
{
    let clickElement=page.click(".toclevel-1.tocsection-7 .toctext")
    return clickElement;
}).then(()=>
{
    url=page.url()
    deriveContent(url)
}).catch((err)=>
{
    console.log(err)
})
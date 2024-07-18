const marked=require('marked')
const sanitizeHtmlLibrary=require('sanitize-html')


const TurndownService = require('turndown')

const turndownService = new TurndownService()


function sanitizeMarkedContent(markedContent)
{
   
    const htmlContentFromMarkdown=marked.parse(markedContent)
  // console.log(htmlContentFromMarkdown)
    const cleanHtml=sanitizeHtmlLibrary(htmlContentFromMarkdown,{
       allowedTags:sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"])
    })
    //console.log(cleanHtml)
   
    
    const markedContentFromHtml=turndownService.turndown(cleanHtml)
   // console.log(markedContentFromHtml)
    return markedContentFromHtml
}

// const input=`
// # 688. Knight Probability in Chessboard 
// ![Alt text](https://assets.leetcode.com/uploads/2018/10/12/knight.png)
// `
// sanitizeMarkedContent(input)
module.exports=sanitizeMarkedContent
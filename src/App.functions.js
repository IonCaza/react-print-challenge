const pageHeightIn = 11;
const pageMarginsIn = 0.2;
const pxPerIn = 96.45454545; // lol . it's 1061px not 1060px :D
const offset = 2;
const ignoredElements = ['guidelinetop', 'guidelinebottom', 'insertedbreakpoint'];
const pageMarginBottomOffsetPx = 0; // it's actually 8.5 but fractions of pixels are not allowed
const pageHeightPx = Math.ceil(pageHeightIn * pxPerIn);
const pageMarginsPx = Math.floor(pageMarginsIn * pxPerIn); // unfortunately we're within 1px of error because of rounding
let guideLineAreas = [];
let pagesStart = 0;
let pagesEnd = 0;

export function togglePrintNonPrint() {
  // Apparently we can't calculate the height of elements that have display:none
  // so we show it all on load, insert breakpoints, and then hide what will be printed

  const onlyprint = document.querySelectorAll('div[class*=onlyPrint]');
  for (let i = 0; i < onlyprint.length; i += 1) {
    onlyprint[i].classList.remove('onlyPrint');
    onlyprint[i].classList.add('onlyPrintAfterInject');
  }

  const noprint = document.querySelectorAll('div[class*=noPrintBeforeInject]');
  for (let i = 0; i < noprint.length; i += 1) {
    noprint[i].classList.remove('noPrintBeforeInject');
    noprint[i].classList.add('noPrint');
  }
}

export function legacyInsertBreakPoints() {
  const divsClean = document.querySelectorAll('div[class*=App]');
  const offset = 0; // pixels not accounted for on top
  const splitAtPercent = 0.5; // if content on next page is more than this percent, split

  const printCleanOffsetTops = new Array(divsClean.length - 1);

  // Store offsetTop in separate array which we manipulate later
  for (let i = 0; i < divsClean.length; i += 1) {
    printCleanOffsetTops[i] = divsClean[i].offsetTop;
  }

  // Iterate through all divs to calculate whether splitting is required
  for (let i = 0; i < divsClean.length; i += 1) {
    const onPage = Math.ceil((printCleanOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printCleanOffsetTops[i] + offset + divsClean[i].offsetHeight);
    console.log(i, ' ', remainderOnNextPage);
    const doTheSplit = () =>
      Math.abs(remainderOnNextPage / divsClean[i].offsetHeight) > splitAtPercent;
    console.log(i, ' ', remainderOnNextPage / divsClean[i].offsetHeight);
    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointHeight = divsClean[i].offsetHeight + remainderOnNextPage;
        const csstext = `height:${breakpointHeight}px;display:block;width:100%;clear:both;`;
        const breakpointElement = document.createElement('div');
        breakpointElement.className = "Insert";
        breakpointElement.style.cssText = csstext;
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.appendChild(breakpointSpace);
        divsClean[i].parentNode.insertBefore(breakpointElement, divsClean[i]);

        // now add the difference to all the divsClean below this one
        for (let o = i + 1; o < divsClean.length; o += 1) {
          printCleanOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsClean[i].offsetHeight)) *
            divsClean[i].offsetHeight;
        }
      }
    }
  }

  /*
  const divsNever = document.querySelectorAll('div[class*=neverBreak]');
  const printNeverOffsetTops = new Array(divsNever.length - 1);
  for (let i = 0; i < divsNever.length; i += 1) {
    printNeverOffsetTops[i] = divsNever[i].offsetTop;
  }

  for (let i = 0; i < divsNever.length; i += 1) {
    const onPage = Math.ceil((printNeverOffsetTops[i] + offset) / pageHeightPx);
    const remainderOnNextPage =
      pageHeightPx * onPage - (printNeverOffsetTops[i] + offset + divsNever[i].offsetHeight);
    const doTheSplit = () => Math.abs(remainderOnNextPage / divsNever[i].offsetHeight) > 0;

    if (remainderOnNextPage < 0) {
      if (doTheSplit()) {
        const breakpointHeight = divsNever[i].offsetHeight + remainderOnNextPage;
        const csstext = `height:${breakpointHeight}px;display:block;width:100%;clear:both;`;
        const breakpointElement = document.createElement('div');
        breakpointElement.style.cssText = csstext;
        const breakpointSpace = document.createTextNode(' ');
        breakpointElement.appendChild(breakpointSpace);
        divsNever[i].parentNode.insertBefore(breakpointElement, divsNever[i]);

        // now add the difference to all the divsNever below this one
        for (let o = i + 1; o < divsNever.length; o += 1) {
          printNeverOffsetTops[o] +=
            (1 - Math.abs(remainderOnNextPage / divsNever[i].offsetHeight)) *
            divsNever[i].offsetHeight;
        }
      }
    }
  }
  */
}

function checkIgnored(i) {
    let x = 0;
    ignoredElements.forEach((e) => {
        if (i.getAttribute(e)) x += 1;
    })
    if (x === 0) {
        return true
    } else {
        return false
    }     
}

export function countPagesStart() {
    const mainDiv = document.querySelectorAll('div[class*=Main]');
    pagesStart = Math.ceil(mainDiv[0].offsetHeight / pageHeightPx);
    console.log(pagesStart);
    if (pagesStart > 0) return pagesStart;
} 

export function countPagesEnd() {
    const mainDiv = document.querySelectorAll('div[class*=Main]');
    pagesEnd = Math.ceil(mainDiv[0].offsetHeight / pageHeightPx);
    console.log(pagesEnd);
    if (pagesEnd > 0) return pagesEnd;
} 

export function drawPageLines() {
    const mainDiv = document.querySelectorAll('div[class*=Main]');
    const numberOfPages = Math.ceil(mainDiv[0].offsetHeight / pageHeightPx);
    console.log(numberOfPages);
    for (let o = 0; o < numberOfPages; o += 1) {
        const top = pageHeightPx * o + pageMarginsPx;
        const csstexttop = `position:absolute;top:${top}px;height:0px;width:100%;border:1px solid #ff0000;`;
        const guideLineTopElement = document.createElement('div');
        guideLineTopElement.style.cssText = csstexttop;
        guideLineTopElement.setAttribute('guidelinetop','true');
        mainDiv[0].parentNode.insertBefore(guideLineTopElement, mainDiv[0]);

        const bottom = pageHeightPx * (o + 1) - pageMarginsPx - pageMarginBottomOffsetPx;
        const csstextbottom = `position:absolute;top:${bottom}px;height:0px;width:100%;border:1px solid #ff0000;`;
        const guideLineBottomElement = document.createElement('div');
        guideLineBottomElement.style.cssText = csstextbottom;
        guideLineBottomElement.setAttribute('guidelinebottom','true');
        mainDiv[0].parentNode.insertBefore(guideLineBottomElement, mainDiv[0]);
    }
}

export function identifyGuideLineAreas() {
    const guideLineTopDivs = document.querySelectorAll('div[guidelinetop*=true]');
    const guideLineBottomDivs = document.querySelectorAll('div[guidelinebottom*=true]');
    console.log('guideLineDivs ↑', guideLineTopDivs.length, ' ↓', guideLineBottomDivs.length);
    const firstGuideLineArea = {
        top: 0,
        bottom: guideLineTopDivs[0].offsetTop
    }
    guideLineAreas.push(firstGuideLineArea);
    for (let i = 0; i < guideLineBottomDivs.length - 1; i += 1) {
        const guideLineArea = {
            top: guideLineBottomDivs[i].offsetTop,
            bottom: guideLineTopDivs[i + 1].offsetTop
        }
        guideLineAreas.push(guideLineArea);
    }
    const lastGuideLineArea = {
        top: guideLineBottomDivs[guideLineBottomDivs.length - 1].offsetTop,
        bottom: guideLineBottomDivs[guideLineBottomDivs.length - 1].offsetTop + pageMarginsPx + pageMarginBottomOffsetPx
    }
    guideLineAreas.push(lastGuideLineArea);
    console.log(guideLineAreas);
}

// This function identifies lowest level divs that are between 2 page margins
export function identifyChildrenWithNoChildrenBetweenGuideLines() {
    const childlessDivs = document.querySelectorAll('div[hasnochildren*=true]');
    childlessDivs.forEach((e) => {
        // For when this is called on update, it strips inguidelinearea first
        if (e.getAttribute('inguidelinearea')) {
            e.removeAttribute('inguidelinearea');
        }
        // Sets inguidelinearea attribute when element is in between guides
        guideLineAreas.forEach((g) => {
            if (((e.offsetTop >= g.top && e.offsetTop <= g.bottom) || 
                (e.offsetTop + e.offsetHeight >= g.top &&
                    e.offsetTop + e.offsetHeight <= g.bottom)) &&
                checkIgnored(e)) {
                e.setAttribute('inguidelinearea', guideLineAreas.indexOf(g));
            }
        })
    })
}

// This function inserts breaks and updates lowest level divs per guideLineArea
export function insertBreakPointsAndUpdate() {
    for (let g = 0; g < guideLineAreas.length; g += 1) {
        const divsInArea = document.querySelectorAll(`div[inguidelinearea="${g}"]`);
        if (divsInArea.length > 0) {
            divsInArea.forEach((e) =>{
                createBreakPoint(e, divsInArea[0]);
            })
            identifyChildrenWithNoChildrenBetweenGuideLines();
        }
    }
}

// Helper function to break out BreakPoint insertion
function createBreakPoint(e, f) {
    const breakpointHeight = e.offsetHeight;
    const csstext = `height:${breakpointHeight}px;display:block;width:100%;clear:both;`;
    const breakpointElement = document.createElement('div');
    breakpointElement.setAttribute('insertedbreakpoint','true');
    breakpointElement.style.cssText = csstext;
    const breakpointSpace = document.createTextNode(' ');
    breakpointElement.appendChild(breakpointSpace);
    f.parentNode.insertBefore(breakpointElement, f);
}

// This function identifies lowest level divs
export function identifyChildrenWithNoChildren() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach((e)=> {
        if (!(e.firstElementChild) && checkIgnored(e)) {
            e.setAttribute('hasnochildren','true');
        }
    })
}


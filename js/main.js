const backToTop = document.getElementById("backtotop");

const checkScroll = () => {
    // 웹페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 반환)
    // determine how much the webpage has scrolled vertically (returned in pixels)
    let scrollY = Window.scrollY;

    scrollY !== 0 ? backToTop.classList.add("show") : backToTop.classList.remove("show");
};

const moveBackToTop = () => {
    scrollTo({ top: 0, left: 0, behavior: "instant" });
};

addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);

// ---------------------------------------------------------------------------------------

const transformPrev = () => {};

const slidePrevList = document.getElementsByClassName("slide-prev");
for (let i = 0; i < slidePrevList.length; i++) {
    // select ul tag
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName("li");
    let liWidth = liList[0].offsetWidth;
    let liMargin = getComputedStyle(liList[0]).getPropertyValue("margin");

    //카드가 ul 태그 너비보다 넘치면, 왼쪽(Prev) 버튼은 활성화하고,
    //오른쪽(NEXT)는 현재 맨 첫카드 위치이므로 비활성화.
    /* 
    내가 단순 영역에 border를 포함하고 싶다면 offsetWidth, offsetHeight,
    단순영역에 border포함X, 스크롤바의 크기 고려X clientWidth, clientHeight,
    영역 내부의 컨텐츠 크기까지 (총 스크롤 크기) 고려 scrollWidth, scrollHeight
    */
    if (classList.clientWidth < liList.length * 260) {
        //마진이 왼쪽, 오른쪽 각각 10
        slidePrevList[i].classList.add("slide-prev-hover");
        slidePrevList[i].addEventListener("click", transformPrev);
    } else {
        // 태그 삭제시, 부모 요소에서 removeChild를 통해서 삭제해야 한다.
        // 따라서, 1. 먼저 부모 요소를 찾는다.
        //         2. 부모 요소의 자식요소인 PREV, NEXT 요소를 삭제
        const arrowContainer = slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }
}

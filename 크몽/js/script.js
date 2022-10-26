
$(function(){
    $(".slideArea").slick({
        slide: 'div',
        infinite : true, 	//무한 반복 옵션	 
        speed : 300,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : false,			// 자동 스크롤 사용 여부
        vertical : false,		// 세로 방향 슬라이드 옵션
        draggable : true, 	//드래그 가능 여부 
        centerMode:true,
        slidesToShow : 3,

    })

    $('.money').on('click',function(){
        $('.money').removeClass('active');
        $(this).addClass('active');
    });


    $('.food').on('click',function(){
        $('.food').removeClass('active');
        $(this).addClass('active');
    })
})
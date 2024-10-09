
$("#hamburger").click(function () {
    $(".slide_responsive").toggleClass("slide_responsive_on");
    $(".profile_area").toggleClass("profile_area_with_menu");
    $(".search_slide_area").toggleClass("search_slide_area_none");
    $(".overlay").toggleClass("overlay_on");
  });
  $("#profile_view").click(function () {
    $(".slide_responsive").toggleClass("slide_responsive_on");
    $(".profile_area").toggleClass("slide_responsive_on");
    $(".menu_item_profile").toggleClass("menu_item_slide_none");
    $(".search_slide_area").toggleClass("search_slide_area_none");
    $(".overlay").toggleClass("overlay_on");
  });
  $("#search").click(function () {
    $(".slide_responsive").toggleClass("slide_responsive_on");
    $(".menu_item_profile").toggleClass("menu_item_slide_none");
    $(".profile_area").toggleClass("profile_area_none");
    $(".overlay").toggleClass("overlay_on");
  });
  $("#clgbtn").click(function () {
    $(".slide_responsive").removeClass("slide_responsive_on");
    $(".profile_area").removeClass("profile_area_with_menu");
    $(".menu_item_profile").removeClass("menu_item_slide_none");
    $(".profile_area").removeClass("profile_area_none");
    $(".search_slide_area").removeClass("search_slide_area_none");
    $(".overlay").removeClass("overlay_on");
  });
  
  /* <script> */
  $(function () {
    $("#foot_head").on("click", function () {
      var n = window,
        t = "inner",
        i;
      "innerWidth" in window ||
        ((t = "client"), (n = document.documentElement || document.body));
      i = { width: n[t + "Width"], height: n[t + "Height"] };
      i.width < 1001 &&
        $(this).siblings(".Information_list ").slideToggle("slow");
      $("#foot_head").toggleClass("foot_head_on");
    });
  });
  $(function () {
    $("#customer_service").on("click", function () {
      var n = window,
        t = "inner",
        i;
      "innerWidth" in window ||
        ((t = "client"), (n = document.documentElement || document.body));
      i = { width: n[t + "Width"], height: n[t + "Height"] };
      i.width < 1001 &&
        $(this).siblings(".customer_service_list ").slideToggle("slow");
      $("#customer_service").toggleClass("foot_head_on");
    });
  });
  $(function () {
    $("#selected_offers_list").on("click", function () {
      var n = window,
        t = "inner",
        i;
      "innerWidth" in window ||
        ((t = "client"), (n = document.documentElement || document.body));
      i = { width: n[t + "Width"], height: n[t + "Height"] };
      i.width < 1001 &&
        $(this).siblings(".selected_offers_list ").slideToggle("slow");
      $("#selected_offers_list").toggleClass("foot_head_on");
    });
  });
  $(function () {
    $("#my_account").on("click", function () {
      var n = window,
        t = "inner",
        i;
      "innerWidth" in window ||
        ((t = "client"), (n = document.documentElement || document.body));
      i = { width: n[t + "Width"], height: n[t + "Height"] };
      i.width < 1001 && $(this).siblings(".my_account ").slideToggle("slow");
      $("#my_account").toggleClass("foot_head_on");
    });
  });
  // </script>;
  

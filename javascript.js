$(document).ready(function () {
    /******************/
    /*** Index page ***/
    /******************/
        // Show/hide titles
    $("div#professional img").mouseover(function () {
        $("div#professional h2").css("color", "black");
    });
    $("div#personal img").mouseover(function () {
        $("div#personal h2").css("color", "black");
    });
    $("div .index img").mouseout(function () {
        $("div h2").css("color", "white");
    });

    /**************/
    /*** Resume ***/
    /**************/
        // Define functons
    function toggleStuffs() {
        var id = $(this).attr("id");
        var idContent = id + "-content";
        if ("none" == $("#" + idContent).css("display")) {
            $(".resume-content").hide();
            $("#" + idContent).show();
        }
        else
            $(".resume-content").hide();
    }

    // Show/hide sections
    $(".resume-heading").click(toggleStuffs);

    /****************/
    /*** PropWare ***/
    /****************/
    $(document).tooltip();

    /**************************/
    /*** Recreational pages ***/
    /**************************/
});

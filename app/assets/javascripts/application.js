// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require bootstrap-sprockets
//= require_tree .


//require turbolinks
var ready = function() {
    $("#my-calendar").zabuto_calendar({
        action: function () {
            return myDateFunction(this.id, false);
        },
        action_nav: function () {
            return myNavFunction(this.id);
        },
        ajax: {
            url: "show_data.php?action=1",
            modal: true
        },
        legend: [
            {type: "text", label: "Special event", badge: "00"},
            {type: "block", label: "Regular event", }
        ]
    });
    /*---LEFT BAR ACCORDION----*/
    $(function() {
        $('#nav-accordion').dcAccordion({
            eventType: 'click',
            autoClose: true,
            saveState: true,
            disableLink: true,
            speed: 'slow',
            showCount: false,
            autoExpand: true,
//        cookie: 'dcjq-accordion-1',
            classExpand: 'dcjq-current-parent'
        });
    });

    var Script = function () {


//    sidebar dropdown menu auto scrolling

        jQuery('#sidebar .sub-menu > a').click(function () {
            var o = ($(this).offset());
            diff = 250 - o.top;
            if(diff>0)
                $("#sidebar").scrollTo("-="+Math.abs(diff),500);
            else
                $("#sidebar").scrollTo("+="+Math.abs(diff),500);
        });



//    sidebar toggle

        $(function() {
            function responsiveView() {
                var wSize = $(window).width();
                if (wSize <= 768) {
                    $('#container').addClass('sidebar-close');
                    $('#sidebar > ul').hide();
                }

                if (wSize > 768) {
                    $('#container').removeClass('sidebar-close');
                    $('#sidebar > ul').show();
                }
            }
            $(window).on('load', responsiveView);
            $(window).on('resize', responsiveView);
        });

        $('.fa-bars').click(function () {
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').css({
                    'margin-left': '0px'
                });
                $('#sidebar').css({
                    'margin-left': '-210px'
                });
                $('#sidebar > ul').hide();
                $("#container").addClass("sidebar-closed");
            } else {
                $('#main-content').css({
                    'margin-left': '210px'
                });
                $('#sidebar > ul').show();
                $('#sidebar').css({
                    'margin-left': '0'
                });
                $("#container").removeClass("sidebar-closed");
            }
        });

// custom scrollbar
        $("#sidebar").niceScroll({styler:"fb",cursorcolor:"##FFFF8E", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});

        $("html").niceScroll({styler:"fb",cursorcolor:"##FFFF8E", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});

// widget tools

        jQuery('.panel .tools .fa-chevron-down').click(function () {
            var el = jQuery(this).parents(".panel").children(".panel-body");
            if (jQuery(this).hasClass("fa-chevron-down")) {
                jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });

        jQuery('.panel .tools .fa-times').click(function () {
            jQuery(this).parents(".panel").parent().remove();
        });


//    tool tips

        $('.tooltips').tooltip();

//    popovers

        //$('.popovers').popover();



// custom bar chart

        if ($(".custom-bar-chart")) {
            $(".bar").each(function () {
                var i = $(this).find(".value").html();
                $(this).find(".value").html("");
                $(this).find(".value").animate({
                    height: i
                }, 2000)
            })
        }


    }();
};

$(document).ready(ready);
$(document).on('page:load', ready);

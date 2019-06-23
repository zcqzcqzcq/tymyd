$(function() {
    $('.ac').click(function() {
        $(this).siblings('#p').css('display', 'block');
        // parents父亲  siblings兄弟  children孩子
        $(this).parents('.fb').siblings('.fb').children('#p').css('display', '');
    });
    $('#menu li').mouseenter(function() {
        $(this).css('border', '1px solid #ccc');
    });
    $('#menu li').mouseleave(function() {
        $(this).css('border', '1px solid purple');
    });
    $('.cj .tab3 .played').click(function() {
        $('.video1').css('display', 'block');
    });
    $('.video1 .exit').click(function() {
        $(this).parents('.video1').css('display', 'none');
    });



    // 轮播图
    // flag 节流阀 是全局变量
    // 节阀流：当上一个函数动画内容执行完毕后，再去执行下一个函数动画，让事件无法连续触发
    var flag = true;
    // 点击右侧按钮， 图片滚动一张 num图片的数量
    var num = 0;
    $('.cj .loter .arrow-r').click(function() {
        // console.log($(this).siblings('ul').children('li').width());
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == $(this).siblings('ul').children('li').length - 1) {
                // alert(111);
                $(this).siblings('ul').css('left', 0);
                num = 0; //此时 我们的ul 要快速复原 left 改为 0
            }
            num++;
            $(this).siblings('ul').animate({
                left: -num * $(this).siblings('ul').children('li').width()
            });
            // console.log(num);
            flag = true; // 开启节流阀
        }
    })
    $('.cj .loter .arrow-l').click(function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == 0) {
                // alert(111);
                num = $(this).siblings('ul').children('li').length - 1; //此时 我们的ul 要快速复原 left 改为 0
                $(this).siblings('ul').css('left', -num * ($(this).siblings('ul').children('li').width()) + 'px');
            }
            num--;
            console.log(num * ($(this).siblings('ul').children('li').width()));
            $(this).siblings('ul').animate({
                left: -num * $(this).siblings('ul').children('li').width()
            });
            // console.log(num);
            flag = true; // 开启节流阀
        }
    })

    $('.rw .tab .played').click(function() {
        $('.video1').css('display', 'block');
    });
    $('.video2 .exit').click(function() {
        $(this).parents('.video2').css('display', 'none');
    });
    $('.mp .tab .played').click(function() {
        $('.video4').css('display', 'block');
    });
    $('.video4 .exit').click(function() {
        $(this).parents('.video4').css('display', 'none');
    });
    // a
    // $('.bnts .a a').click(function() {
    //     $(this).children('.lx').siblings('a').css('display', 'none')
    // });

    // 门派
    // $('.mp .bnts .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts a').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).css('display', 'none');
    //     $(this).siblings('.lx').css('border', '1px solid #666');
    // });




    // $('.lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });
    // $('.mp .bnts .a a').click(function() {
    //     $(this).css('display', 'none');
    //     $(this).siblings('.lx').css('border', '1px solid #666');
    // });
    // // a
    // $('.mp .bnts .a .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .a .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });
    // // b
    // $('.mp .bnts .b .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .b .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });

    // // c
    // $('.mp .bnts .c .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .c .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });

    // // d
    // $('.mp .bnts .d .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .d .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });

    // // e
    // $('.mp .bnts .e .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .e .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });

    // // f
    // $('.mp .bnts .f .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .f .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#fff');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });

    // // g
    // $('.mp .bnts .g .lx').mouseenter(function() {
    //     // $(this).children('.lx').css('backgroundColor', '#ccc');
    //     $(this).siblings('a').css('display', 'block');
    //     $(this).css('border', '1px solid #ccc');
    // });
    // $('.mp .bnts .g .lx').mouseleave(function() {
    //     // $(this).children('.lx').css('backgroundColor', ' ');
    //     $(this).siblings('a').css('display', 'none');
    //     $(this).css('border', '1px solid #666');
    // });


    // 身份













    // a
    $('.sf .bnts .a').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .a').mouseleave(function() {
        if ($('.sf .bnts .a a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .a a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .a a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.a').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // b
    $('.sf .bnts .b').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .b').mouseleave(function() {
        if ($('.sf .bnts .b a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .b a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .b a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.b').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // c
    $('.sf .bnts .c').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .c').mouseleave(function() {
        if ($('.sf .bnts .c a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .c a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .c a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.c').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // d
    $('.sf .bnts .d').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .d').mouseleave(function() {
        if ($('.sf .bnts .d a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .d a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .d a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.d').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // e
    $('.sf .bnts .e').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .e').mouseleave(function() {
        if ($('.sf .bnts .e a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .e a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .e a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.e').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // f
    $('.sf .bnts .f').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .f').mouseleave(function() {
        if ($('.sf .bnts .f a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .f a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .f a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.f').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // g
    $('.sf .bnts .g').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .g').mouseleave(function() {
        if ($('.sf .bnts .g a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .g a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .g a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.g').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // h
    $('.sf .bnts .h').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .h').mouseleave(function() {
        if ($('.sf .bnts .h a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .h a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .h a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.h').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // i
    $('.sf .bnts .i').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .i').mouseleave(function() {
        if ($('.sf .bnts .i a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .i a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .i a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.i').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });

    // j
    $('.sf .bnts .j').mouseenter(function() {
        $(this).children('a').css('display', 'block');
        $(this).children('.lx').css('border', '1px solid #ccc');
    });
    $('.sf .bnts .j').mouseleave(function() {
        if ($('.sf .bnts .j a').siblings('.lx').attr('index') == 1) {
            return;
        }
        $(this).children('a').css('display', 'none');
        $(this).children('.lx').css('border', '1px solid #666');
        // if ($('.sf .bnts .j a').siblings('.lx').attr('index') == 1) {
        //     return;
        // }
    });
    $('.sf .bnts .j a').click(function() {
        // $(this).children('a').css('display', 'block');
        $(this).siblings('.lx').css('border', '1px solid #ccc');
        $(this).parents('.j').siblings().children('.lx').css('border', '1px solid #666');
        $(this).siblings('.lx').attr('index', 1);
        // alert(111);
    });
    $(".mp .bnts span").click(function() {
        var index = $(this).index();
        console.log(index);
        $(".mp .utd .role").eq(index).css("display", "block").siblings().css("display", "none");
    })
})
$(function() {
  // ****************文章类别**********
  $.ajax({
      type: 'get',
      url: requestURL.category,
      success(data) {
        console.log(data);
        const htmlTxt = template('category', data);
        $('.level_two,.left_menu').html(htmlTxt);
      }
    })
    // ****************热点图**********
  $.ajax({
      type: 'get',
      url: requestURL.hotpic,
      success(data) {
        //   console.log(data);
        const htmlTxt = template('hotpic', data);
        $('.focus_list').html(htmlTxt);
      }
    })
    // **************最新资讯**************
  $.ajax({
      type: 'get',
      url: requestURL.latest,
      success(data) {
        //   console.log(data);
        const htmlTxt = template('latest', data);
        $('.common_news').html(htmlTxt);
      }
    })
    // **************热门排行**************
  $.ajax({
      type: 'get',
      url: requestURL.rank,
      success(data) {
        // console.log(data);
        const htmlTxt = template('rank', data);
        $('.hotrank_list').html(htmlTxt);
        //加类名
        $('.hotrank_list').find('span')[0].classList.add('first');
        $('.hotrank_list').find('span')[1].classList.add('second');
        $('.hotrank_list').find('span')[2].classList.add('third');
      }
    })
    // **************最新评论**************
  $.ajax({
      type: 'get',
      url: requestURL.latest_comment,
      success(data) {
        //   console.log(data);
        const htmlTxt = template('latest_comment', data);
        $('.comment_list').html(htmlTxt);
      }
    })
    // **************焦点关注**************
  $.ajax({
    type: 'get',
    url: requestURL.attention,
    success(data) {
      // console.log(data);
      const htmlTxt = template('attention', data);
      $('.guanzhu_list').html(htmlTxt);
    }
  })

  // 搜索关键词
  //点击搜索
  $('.search_btn').on('click', function() {
    //获取搜索框的值
    let key = $(this).siblings('input').val();
    if (!key) {
      key = $(this).siblings('input').prop('placeholder');
    }
    window.location.href = `./list.html?key=${key}`;
  });
  //回车搜索
  $('.search_txt').on('keydown', function() {
    if (event.keyCode == 13) {
      //获取搜索框的值
      let key = $(this).val();
      if (!key) {
        key = $(this).prop('placeholder');
      }
      window.location.href = `./list.html?key=${key}`;
    }
  });

})
## 文件：fm_vote.html 因为公司项目管理混乱，不愿意花时间整理，所以这个不相关的项目文件必须放在/weixin_h5/目录下。

## 接口说明：

### 投票流程
  #### 1. 用户访问   infoid 可能为0 , 销售转发时候不能为0
  			weixin.htyou.com/weixin/thirdWebPageLogin.action?page_url=mainpage.html_infoid=0
  #### 2. 跳转到页面 mainpage.html?infoid=730&openid=oiZKXjneSSOJG82vDjjeFp5h_LLU&status=1
  			status = 1 正常    	status = 101 //参数不正确  status = "105"; //销售人员未注册   	status = "102"; //已投票
  #### 3. 销售转发 	URL			weixin.htyou.com/weixin/thirdWebPageLogin.action?page_url=mainpage.html_infoid=730    infoid 销售id

  #### 4. 投票 /user/htuser_weixinVote.action      infoid  openid 必填
  			status = 1 正常       status=101   infoid  openid 必填



15:34:18
创发曹熙 2016/7/8 15:34:18

15:42:28
创发曹熙 2016/7/8 15:42:28
	weixin.htyou.com/weixin/thirdWebPageVoteHT.action?page_url=mainpage.html_infoid=0

创发曹熙 2016/7/8 15:42:43
销售转发 	URL			weixin.htyou.com/weixin/thirdWebPageVoteHT.action?page_url=mainpage.html_infoid=730    infoid 销售id



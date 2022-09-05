export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxc0a24a8e0d7a9a7d",

  // 公众号APP_SECRET
  APP_SECRET: "03c3937abeaa6853a379621b69c73aff",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "东华",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oEWKd5_pfNvGxdI6M_luNNcEK130",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "pdGliiJj0W1Zu77dq50X2K7qwexDxxSVLjSG-VyZGgk",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: ["oEWKd5_pfNvGxdI6M_luNNcEK130"]    

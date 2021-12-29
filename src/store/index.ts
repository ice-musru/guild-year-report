import { createStore } from "vuex";

export default createStore({
  state: {
    guildData: {
      //  新增主播总数
      anchor_incr_num: 0,
      //  新增主播总数排名百分比
      anchor_incr_rank: 0,
      //  经纪人最后一次登录时间
      staff_last_login_time: "",
      //  经纪人拉新排行TOP5
      staff_anchors_incr_rank: [
        {
          rank: 0,
          score: "",
          uface: "",
          uname: "",
        },
      ],
      //  经纪人主播收益排行TOP5
      staff_anchors_income_rank: [
        {
          rank: 0,
          score: "",
          uface: "",
          uname: "",
        },
      ],
      //  获取的礼物总数
      gifts_num: 0,
      //  获取的礼物总价值（电池）
      gifts_value: "",
      //  有效开播总时长（小时）
      valid_live_time: "",
      //  平均每天有效开播时长（小时）
      avg_valid_live_time: 0.1,
      //  最长的开播时长（场次）
      max_live_time: 0,
      //  最长的开播时长折算为xx个跨年晚会
      max_live_time_conversion: 0.1,
      //  最长开播时长的直播间标题
      max_live_time_title: "",
      //  最长开播时长的直播间封面
      max_live_time_cover: "",
      //  最长开播时长的直播间主播昵称
      max_live_time_uname: "",
      //  主播开播时长排行TOP5
      anchor_live_time_rank: [
        {
          rank: 0,
          score: "",
          uface: "",
          uname: "",
        },
      ],
      //  弹幕总数
      dm_num: "",
      //  最多的弹幕数（场次）
      max_dm_num: "",
      //  最多弹幕数的直播间标题
      max_dm_num_live_title: "",
      //  最多弹幕数的直播间封面
      max_dm_num_live_cover: "",
      //  最多弹幕数的直播间主播昵称
      max_dm_num_live_uname: "",
      //  主播弹幕数排行TOP5
      anchor_dm_rank: [
        {
          rank: 0,
          score: "",
          uface: "",
          uname: "",
        },
      ],
      //  新增大航海总数
      guard_incr_num: 0,
      //  新增大航海最多的人数（场次）
      max_guard_incr_num: 0,
      //  新增大航海最多的人数折算为xx游轮/游船的数量
      max_guard_incr_num_conversion: "",
      //  新增大航海人数最多的直播间标题
      max_guard_incr_live_title: "",
      //  新增大航海人数最多的直播间封面
      max_guard_incr_live_cover: "",
      //  新增大航海人数最多的直播间主播昵称
      max_guard_incr_live_uname: "",
      //  主播大航海排名
      anchor_guard_rank: [
        {
          rank: 0,
          score: "",
          uface: "",
          uname: "",
        },
      ],
      //  公会入驻时间
      guild_entry_time: 1,
      //  经纪人页面是否显示
      is_staff_show: true,
      //  年度报告是否显示
      is_report_show: true,
      //  公会id
      guild_id: 1104,
    },
  },
  getters: {
    guildData: (state) => state.guildData,
  },
  mutations: {
    SET_GUILD_DATA(state, payload) {
      state.guildData = payload;
    },
  },
  actions: {
    setGuildData({ commit }, payload) {
      commit("SET_GUILD_DATA", payload);
    },
  },
  modules: {},
});

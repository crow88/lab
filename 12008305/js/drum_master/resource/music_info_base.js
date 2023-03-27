define([
	'underscore',
], function( _ ){

	var MusicInfo = function (attr) {

		this.common = { 
			gauge : {
				limit : 10000,
				add : 200,
			},
		}
		this.animation_list = {
			//---------待機---------//
			"wait" : {
				animation : [
					{
						name:"cos_000_1p_001",
						frame:9
					},
					{
						name:"cos_000_1p_002",
						frame:9
					},
					{
						name:"cos_000_1p_001",
						frame:9
					},
					{
						name:"cos_000_1p_002",
						frame:9
					},
					{
						name:"cos_000_1p_001",
						frame:9
					},
					{
						name:"cos_000_1p_002",
						frame:9
					},
					{
						name:"cos_000_1p_003",
						frame:9
					},
					{
						name:"cos_000_1p_004",
						frame:9
					},
				],
				end_action : "loop",
				//割り込み可能かどうか
				interruptable : true,
			},
			//---------ミス---------//
			"bad" : {
				animation : [
					{
						name:"cos_000_1p_005",
						frame:9
					},
					{
						name:"cos_000_1p_006",
						frame:9
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			//---------フルコンボ待機---//
			"full_wait" : {
				animation : [
					{
						name:"cos_000_1p_029",
						frame:8
					},
					{
						name:"cos_000_1p_030",
						frame:8
					},
					{
						name:"cos_000_1p_029",
						frame:8
					},
					{
						name:"cos_000_1p_028",
						frame:8
					},
				],
				end_action : "loop",
				//割り込み可能かどうか
				interruptable : true,
			},
			//---------風船---------//
			//直す
			"balloon_wait" : {
				animation : [
					{
						name:"cos_000_1p_023 balloon",
						frame:10,
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			//直す
			"balloon_act" : {
				animation : [
					{
						name:"cos_000_1p_024 balloon",
						frame:5,
					},
				],
				end_action : "balloon_wait",
				interruptable : true,
			},
			"balloon_good" : {
				animation : [
					{
						name:"cos_000_1p_007 balloon",
						frame:10
					},
				],
				end_action : "once",
				interruptable : true,
			},
			"balloon_bad" : {
				animation : [
					{
						name:"cos_000_1p_026 balloon",
						frame:10
					},
				],
				end_action : "once",
				interruptable : true,
			},
			//---------ゴーゴータイム---------//
			"fever" : {
				animation : [
					{
						name:"cos_000_1p_018",
						frame:8
					},
					{
						name:"cos_000_1p_020",
						frame:3
					},
					{
						name:"cos_000_1p_022",
						frame:8
					},
					{
						name:"cos_000_1p_020",
						frame:3
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			//---------コンボ達成---------//
			"good" : {
				animation : [
					{
						name:"cos_000_1p_007",
						frame:10
					},
				],
				end_action : "once",
				interruptable : true,
			},
			//---------くす玉---------//
			"kusudama_wait" : {
				animation : [
					{
						name:"cos_000_1p_040 kusudama",
						frame:10
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			"kusudama_act" : {
				animation : [
					{
						name:"cos_000_1p_041 kusudama",
						frame:3
					},
				],
				end_action : "kusudama_wait",
				interruptable : true,
			},
			"kusudama_good" : {
				animation : [
					{
						name:"cos_000_1p_042 kusudama jump",
						frame:10
					},
				],
				end_action : "once",
				interruptable : true,
			},
			"kusudama_good_lite" : {
				animation : [
					{
						name:"cos_000_1p_042 kusudama jump_lite",
						frame:15
					},
				],
				end_action : "once",
				interruptable : true,
			},

			"kusudama_bad" : {
				animation : [
					{
						name:"cos_000_1p_044 kusudama",
						frame:10
					},
				],
				end_action : "once",
				interruptable : true,
			},
			//---------結果発表クリア成功---------//
			"result_good" : {
				animation : [
					{
						name:"cos_000_1p_034",
						frame:9
					},
					{
						name:"cos_000_1p_035",
						frame:9
					},
					{
						name:"cos_000_1p_034",
						frame:9
					},
					{
						name:"cos_000_1p_033",
						frame:9
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			//---------結果発表クリア失敗---------//
			"result_bad" : {
				animation : [
					{
						name:"cos_000_1p_039",
						frame:10
					},
				],
				end_action : "loop",
				interruptable : true,
			},
			//---------結果発表クリア惜しい---------//
			"result_close_1" : {
				animation : [
					{
						name:"cos_000_1p_036",
						frame:5
					},
					{
						name:"cos_000_1p_037",
						frame:5
					},
				],
				end_action : "result_close_2",
				interruptable : true,
			},
			//---------結果発表クリア惜しい---------//
			"result_close_2" : {
				animation : [
					{
						name:"cos_000_1p_038",
						frame:3
					},
					{
						name:"cos_000_1p_037",
						frame:3
					},
				],
				end_action : "loop",
				interruptable : true,
			},
		};
		// 当り判定
		// 丸を中心に前後にms
		this.judge = {
			excellent : 45,
			good : 75,
			bad : 85,
		};
		
		//ドンの判定範囲
		this.hit_zone = 160;
		
		//大音符判定パーセント
		this.big_note = {
			don : 60,	//太鼓の大きさが100%
			ka : 138,	//太鼓の大きさ外なので100以上
		};
		
		// 演出の設定
		// 各種設定以上の値で演出が再生される
		// 3 : 最高演出
		// 2 : 標準
		// 1 : 軽量版
		this.option = {
			// 3 以下全部
			cutin : 3,			// 踊り子演出
			soul : 3,			// 魂エフェクト
			stream : 3,			// ちびキャラ演出
			kusudama_animation : 3, //くすだまのswf版
			// 2 以下全部
			rainbow : 2,		// ゲージフル演出
			effect_circle : 2,	// 飛び符演出
			goal : 2,			// 良可のエフェクト
			score : 2,			//スコア加算
			// 1 以下全部
			donchan : 1,		// ナビキャラ
		};
		_.extend(this, attr);
	};
	return MusicInfo;
});
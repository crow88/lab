define([
	window.Game.js_url_list["music_info_base"],
], function( MusicInfoBase ){
	return new MusicInfoBase({
		status : {
			e : {
				
				base_score : 600,
				combo_score : 720,
				
				fullcombo : 117,
				clearline : 6000,
				
				difficulty : 3,
				excellent : 135,
				good : 101,
				bad : -67,
				idol_appear_timing : {
					"1" : 0,
					"2" : 8,
					"3" : 15,
					"4" : 50,
				},
			},
			n :{
				
				base_score : 740,
				combo_score : 910,
				
				fullcombo : 149,
				clearline : 7000,
				
				difficulty : 3,
				excellent : 97,
				good : 72,
				bad : -48,
				idol_appear_timing : {
					"1" : 0,
					"2" : 9,
					"3" : 17,
					"4" : 50,
				},
			},
			h : {
				
				base_score : 560,
				combo_score : 530,
				
				fullcombo : 385,
				clearline : 7000,
				
				difficulty : 5,
				excellent : 38,
				good : 29,
				bad : -48,
				idol_appear_timing : {
					"1" : 0,
					"2" : 9,
					"3" : 17,
					"4" : 50,
				},
			},
		},
	});

});
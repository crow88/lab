define([
	window.Game.js_url_list["music_info_base"],
], function( MusicInfoBase ){
	return new MusicInfoBase({
		status : {
			e : {
				
				base_score : 820,
				combo_score : 1530,
				
				fullcombo : 82,
				clearline : 6000,
				
				difficulty : 3,
				excellent : 193,
				good : 144,
				bad : -96,
				idol_appear_timing : {
					"1" : 0,
					"2" : 8,
					"3" : 15,
					"4" : 50,
				},
			},
			n :{
				
				base_score : 940,
				combo_score : 1700,
				
				fullcombo : 105,
				clearline : 7000,
				
				difficulty : 4,
				excellent : 135,
				good : 102,
				bad : -102,
				idol_appear_timing : {
					"1" : 0,
					"2" : 9,
					"3" : 17,
					"4" : 50,
				},
			},
			h : {
				
				base_score : 880,
				combo_score : 1140,
				
				fullcombo : 211,
				clearline : 7000,
				
				difficulty : 5,
				excellent : 70,
				good : 53,
				bad : -88,
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
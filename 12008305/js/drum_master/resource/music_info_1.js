define([
	window.Game.js_url_list["music_info_base"],
], function( MusicInfoBase ){
	return new MusicInfoBase({
		status : {
			e : {
				
				base_score : 450,
				combo_score : 600,
				
				fullcombo : 131,
				clearline : 6000,
				difficulty : 3,
				excellent : 121,
				good : 90,
				bad : -60,
				
				idol_appear_timing : {
					"1" : 0,
					"2" : 7,
					"3" : 15,
					"4" : 50,
				},
			},
			n :{
				
				base_score : 600,
				combo_score : 800,
				
				fullcombo : 155,
				clearline : 7000,
				difficulty : 4,
				excellent : 92,
				good : 69,
				bad : -69,
				
				idol_appear_timing : {
					"1" : 0,
					"2" : 9,
					"3" : 18,
					"4" : 50,
				},
			},
			h : {
				
				base_score : 460,
				combo_score : 500,
				
				fullcombo : 346,
				clearline : 7000,
				difficulty : 4,
				excellent : 42,
				good : 31,
				bad : -49,
				
				idol_appear_timing : {
					"1" : 0,
					"2" : 9,
					"3" : 18,
					"4" : 50,
				},
			},
		},
	});

});
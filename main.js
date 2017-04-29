var selected = "crotchet";

var offsets = {
	"semibreve":{
		"offset": 1.0
	},
	"minim":{
		"offset": 2.0
	},
	"crotchet":{
		"offset": 4.0
	},
	"quaver":{
		"offset": 8.0
	},
	"semiquaver":{
		"offset": 16.0
	},
	"demisemiquaver":{
		"offset": 32.0
	},
	"rest-semibreve":{
		"offset": 1.0
	},
	"rest-minim":{
		"offset": 2.0
	},
	"rest-crotchet":{
		"offset": 4.0
	},
	"rest-quaver":{
		"offset": 8.0
	},
	"rest-semiquaver":{
		"offset": 16.0
	},
	"rest-demisemiquaver":{
		"offset": 32.0
	},
	
};


$(document).ready(function(){
	$(".row.start-page")
		.find(".measure:nth-child(1) .track:nth-child(6) .track-contents")
		.append(MakeIcon("key-g"));
	
});

$(".measure .track").click(function(e){
	$(".note-container").removeClass("selected");
	var offset = parseInt(e.pageX - $(this).offset().left);
	var stepsize = parseInt($(this).width() / offsets[selected]["offset"]);
	var stepcount = parseInt(offset / stepsize);
	
	if(stepcount >= offsets[selected]["offset"]){
		$(this).parent().next().click();

	}else{
		var trueoffset =  stepcount * stepsize;
		var theoricalfill = parseFloat($(this).data("fill")) + 1.0/offsets[selected]["offset"];
		var canplace = $(this).find(".intermediate").filter(function(e){
					return $(this).css("margin-left").replace("px", '') == trueoffset;
				}).length <= 0 && theoricalfill <= $(this).parent().data("measure-length") ;
		
		
		if( canplace){
			var target = $(this).find(".track-contents");
			if(selected.startsWith("rest-")){
				target = $(this).closest(".measure").find(".track:nth-child(5) .track-contents");
				if($(this).parent(".measure").find(".track").filter(function(e){
					return parseFloat($(this).data("fill")) > theoricalfill; 
				}).length > 0){
					console.log("a");
					//exit method
					return;
				}
			}
			
			target
				.append(MakeIcon(selected).css("margin-left", ""+trueoffset+"px ").find(".note-container").addClass("selected").parent());	
			
			target.parent()
				.data("fill", theoricalfill);
		}
			
		
			
	}
	
	
	
});

$(".sel-note").click(function(){
	$(".sel-note").addClass("btn-primary").removeClass("btn-success");
	selected = $(this).data("value");
	$(this).addClass("btn-success")
	
});

$(".add-row").click(function(){
	MakeRow().insertBefore($(this).parent());
	
});



function MakeIcon( note){
	var n =$("<div class='intermediate'><div class='note-container' ></div><i class='music-"+note+" note'></i></div>"); 
	n.find(".note-container").on("click",function(e){
		if(	!(e.pageX >= $(this).offset().left && 
			e.pageX <= $(this).offset().left + $(this).width() &&
			e.pageY >= $(this).offset().top && 
			e.pageY <= $(this).offset().top + $(this).height() )){
			
		}else{
			$(this).toggleClass("selected");
			e.stopPropagation();
		}
		
	});
	n.find("i").on("hover", function(e){
		e.stopPropagation();
	});

	
	return n;
}

function MakeRow(){
	return $(`<div class="row">
				<div class="measure">
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					
				</div>
				<div class="measure">
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					
				</div>
				<div class="measure">
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					
				</div>
				<div class="measure">
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					<div class="track">
						<div class="track-contents"></div>
					</div>
					
				</div>
			
			</div>
			`);
}
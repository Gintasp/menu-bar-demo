var menuTab=document.querySelectorAll("li");
var burger=document.querySelector(".burger");
var menu=document.querySelector("ul");

function shrink(){
	return $("ul").removeClass("flex-vertical").addClass("flex");
}
function expand(){
	return $("ul").removeClass("flex").addClass("flex-vertical");
}

for(var i=0;i<menuTab.length;i++){
	menuTab[i].addEventListener("click",function(){
		if(!this.classList.contains("active")){
			this.classList.add("active");
			$(this).siblings().removeClass("active");
		}
	});
};

$(".burger").on("click",function(){
	$(".burger").html("<i class='fas fa-times'></i>");
	if($("ul").hasClass("flex-vertical")){
		$(".burger").html("<i class='fas fa-bars'></i>");
		shrink();
	}else{
		expand();
	}
});
function hello(id){
				
				
				var sdl=['Hà Nguyên Anh','Nguyễn Thị Huế','Thắng 2','Thắng','Tiến','Anh Tiến','Việt Tùng','Dự','Tiệp','Chị Thùy','Huy Bean','Đình Nam','Phong','Tiến Lùi','Ngọc Tú','Huy Anh','Khôi'];
				for (let i = 0; i < sdl.length; i++) {
					if ($('#hihi'+id).html()==sdl[i]) {
					$('#album-view').append('<img id="huy" src="image/'+sdl[i]+'.jpg"/>');
					break;
					}
				}
				
				$('img').each(function(index){
					$(this).click(function(){
							$('#modal-view').append('<img src="'+$(this).attr('src')+'"/>').removeClass('hidden').html();
							$('#album-view').html('');
							
							
					});
				});	
				$('#modal-view').click(function(){
					$(this).addClass('hidden');
					$(this).html('')
				});

			};

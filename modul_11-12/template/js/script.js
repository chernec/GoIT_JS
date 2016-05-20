$(function() {
	var html = $('#person-page').html();

	var data = {
		name: 'Чернец Дмитрий',
		status: 'Студент Харьковского авиационного университета',
		avatar: 'images/myphoto.jpg',
		why: 'Хочу учить фронтенд, потому что:',
		reasons: ['Ремонтировать телевизоры не модно', 'Перспективно', 'Интересно'],
		phoneTitle: 'Мой контактный телефон',
		phoneNumber: '+380664024839',
		profileTitle: 'Мой профиль вконтакте',
		profileHref: 'https://vk.com/dimachernec',
		networkName: 'vk.com',
		feedbackTitle: 'Мой фидбек:',
		feedback: 'Если нужно, могу отремантировать телевизор'
	};

	var content = tmpl(html, data);

	$('body').append(content);
});
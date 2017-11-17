
$(document).ready(() => {
	$('.deletecustomer').on('click', deletecustomer);
	$('#editModal').on('shown.bs.modal', editcustomer);
});

function deletecustomer() {
	const confirmation = confirm('are you sure?');

	if (confirmation) {
		console.log($(this).data('id'));
		$.ajax({
			type: 'DELETE',
			url: '/customers/delete/' + $(this).data('id')
		}).done(respones => {
		});
		window.location.replace('/customers');
	} else {
		return false;
	}
}


function editcustomer() {
    // const confirmation = confirm('editcustomer are you sure?');

    $('#editFirstName').val("test");
    

	// if (confirmation) {
	// 	console.log($(this).data('id'));
	// 	$.ajax({
	// 		type: 'DELETE',
	// 		url: '/customers/delete/' + $(this).data('id')
	// 	}).done(respones => {
	// 	});
	// 	window.location.replace('/customers');
	// } else {
	// 	return false;
	// }
}

Drupal.behaviors.webform_multiple = function (context) {

    var id = '#webform-component-multi-file-upload';
    $(id + ' input').attr('name', $(id + ' input').attr('name') + '[]');
    /*
    $('#webform-component-multi-file-upload input').MultiFile({
	namePattern: "files[multi_file_upload][]",
	list: id + ' .inner'
	*/
}
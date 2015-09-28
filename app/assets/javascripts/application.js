$.fn.checkboxNone = function(options) {
	var settings = $.extend({
		textarea: false
	}, options );

    $(this).click(function() {
    	if($(this).data('none')) {
			$(":checkbox:checked").each(function() {
				if(!$(this).data('none')){
					if(settings.textarea) {
						$(this).attr('checked', false)
						.parent().removeClass('selected')
						.next().hide();
						$('.special-aids textarea').not( "#otherSpecialEquipment" ).prop("disabled", true )
					} else {
						$(this).attr('checked', false)
						.parent().removeClass('selected');

						$('#other-box:visible').hide()
						.find('input').prop("disabled", true );
					}
				}
			})
    	} else {
    		$(":checkbox:checked").each(function() {
    			if($(this).data('none')){
    				$(this).attr('checked', false).parent().removeClass('selected');
				}
    		});
    		if(settings.textarea) {
    			$('.special-aids textarea').not( "#otherSpecialEquipment" ).prop("disabled", false )
    		} else {
    			$('#other-box:visible').find('input').prop("disabled", false )
    		}
		}
    })
};
function ShowHideContent() {
  var self = this;
  self.showHideRadioToggledContent = function () {
    $(".block-label input[type='radio']").each(function () {

      var $radio = $(this);
      var $radioGroupName = $radio.attr('name');
      var $radioLabel = $radio.parent('label');

      var dataTarget = $radioLabel.attr('data-target');

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (dataTarget) {

        // Set aria-controls
        $radio.attr('aria-controls', dataTarget);

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $radio.closest('form').find(".block-label input[name=" + $radioGroupName + "]").each(function () {
            var $this = $(this);

            var groupDataTarget = $this.parent('label').attr('data-target');
            var $groupDataTarget = $('#' + groupDataTarget);

            // Hide toggled content
            $groupDataTarget.hide();
            // Set aria-expanded and aria-hidden for hidden content
            $this.attr('aria-expanded', 'false');
            $groupDataTarget.attr('aria-hidden', 'true');
          });

          var $dataTarget = $('#' + dataTarget);
          $dataTarget.show();
          // Set aria-expanded and aria-hidden for clicked radio
          $radio.attr('aria-expanded', 'true');
          $dataTarget.attr('aria-hidden', 'false');

        });

      } else {
        // If the data-target attribute is undefined for a radio button,
        // hide visible data-target content for radio buttons in the same group

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $(".block-label input[name=" + $radioGroupName + "]").each(function () {

            var groupDataTarget = $(this).parent('label').attr('data-target');
            var $groupDataTarget = $('#' + groupDataTarget);

            // Hide toggled content
            $groupDataTarget.hide();
            // Set aria-expanded and aria-hidden for hidden content
            $(this).attr('aria-expanded', 'false');
            $groupDataTarget.attr('aria-hidden', 'true');
          });

        });
      }

    });
  }
  self.showHideCheckboxToggledContent = function () {

    $(".block-label input[type='checkbox']").each(function() {

      var $checkbox = $(this);
      var $checkboxLabel = $(this).parent();

      var $dataTarget = $checkboxLabel.attr('data-target');

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

        // Set aria-controls
        $checkbox.attr('aria-controls', $dataTarget);

        // Set aria-expanded and aria-hidden
        $checkbox.attr('aria-expanded', 'false');
        $('#'+$dataTarget).attr('aria-hidden', 'true');

        // For checkboxes revealing hidden content
        $checkbox.on('click', function() {

          var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          // Toggle hidden content
          $('#'+$dataTarget).toggle();

          // Update aria-expanded and aria-hidden attributes
          $(this).attr('aria-expanded', state);
          $('#'+$dataTarget).attr('aria-hidden', !state);

        });
      }

    });
  }
}

$(document).ready(function() {

  // Turn off jQuery animation
  jQuery.fx.off = true;

  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
  new GOVUK.SelectionButtons($blockLabels);

  // Details/summary polyfill
  // See /javascripts/vendor/details.polyfill.js

  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var toggleContent = new ShowHideContent();
  toggleContent.showHideRadioToggledContent();
  toggleContent.showHideCheckboxToggledContent();

  /******************
  pip11
  *******************/
  $(".link-table").click(function () {
		var dataTarget = $(this).attr('data-target');
		$("tr."+dataTarget+".js-hidden").first().removeClass('js-hidden');
		if($("tr."+dataTarget+".js-hidden").length == 0){ $(this).addClass('js-hidden');}
		return false;
	});

  $('.hc-profession').change(function() {
		$(this).val() === 'Other' ? $(this).parents('li').next('li').show() : $(this).parents('li').next('li').hide();
	});

	$(".link-show").click(function () {
		var dataTarget = $(this).attr('data-target');
		$("#"+dataTarget).removeClass('js-hidden');
		$(this).hide();
		return false;

	});

  $('.special-aids input[type=checkbox]').checkboxNone({textarea:true});
	$('.submit-evidence input[type=checkbox]').checkboxNone();

  /******************
  Check your answers


  $('form.checkMyAnswers').submit(function(){
  console.log($(this).data('question'))
  console.log($(this).serialize());
  return false;
  })
  *******************/
  $('.show-answer').click(function(e) {
  		var linkText    = $(this).text(),
  			openText    = $(this).data('open-text'),
  			closeText   = $(this).data('close-text'),
  			questionHd  = $(this).parent().prev().text(),
  			newLinkText = linkText === openText ? closeText : openText;

  		$(this).text(newLinkText);
  		$(this).attr('aria-label',$(this).attr('aria-label').replace(linkText,newLinkText));
  		$(this).closest('.form-group').next('.answered-question-cont').toggle();

  		return false;
  	});

  	$('.show-all').click(function(e) {
  		var action  = $(this).data('action'),
  			openText  = $(this).data('open-text'),
  			closeText = $(this).data('close-text'),
  			linkText  = $(this).text();

  		action === 'open' ? $(this).text(closeText) : $(this).text(openText);

  		$( ".answered-question-cont" ).each(function() {
  			var linkText  = $(this).prev().find('.show-answer'),
  				openText  = linkText.data('open-text'),
  				closeText = linkText.data('close-text');

  				action === 'open' ? $(this).show() : $(this).hide();
  				action === 'open' ? linkText.text(closeText) : linkText.text(openText);
  		});

  		action === 'open' ? $(this).data('action','close') : $(this).data('action','open');

  		return false;
  	});

		$('#help-link').click(function(){
			return false;
		});
});

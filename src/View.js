import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { pre, div, h1, button, form, label, input, } = hh(h);

function fieldSet(labelText, inputValue){
    return div([
         label({ className: ' d-inline mb-1'}, labelText),
         input({
         	className: ' form-control p-2 mb-2',
         	type: 'text',
         	value: inputValue,
         }),
    	]);
}
function buttonSet(dispatch){
	return div([
    button(
      {
      	className: 'btn btn-success mr-2',
      	type: 'submit',
      },
      'Save',
    	),
    button(
       {
        className: 'btn btn-danger ',
      	type: 'submit',
       },
       'Cancel',
    	)
		])
}
function formView(dispatch, model){
	const { description, calories, showForm } = model;
	if(showForm) {
	return form (
         {
          className: 'w-10 p-3',
         },
         [
         fieldSet('Meal', description),
         fieldSet('Calories', calories || ''), 
         buttonSet(dispatch), 
         ],
		);
}
	return button(
     { className: 'btn btn-primary'},
     'Add Meal',
		)
}

function view(dispatch, model){
return div({ className: 'container'}, [
h1({ className: 'display-4'}, 'Calories Counter'),
formView(dispatch, model),
pre(JSON.stringify(model, null, 2)),
	]);
}
export default view;
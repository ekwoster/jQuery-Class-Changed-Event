# jQuery-Class-Changed-Event
Small jQuery snippet to implement classChanged event to any element.

Anytime class name of element is changed (new class added, or some class is removed), then this event is triggered, and any binded to this event function is executed.

## Example

```javascript
jQuery('header').bind('classChanged', function(){
	console.log('class changed');
});
```
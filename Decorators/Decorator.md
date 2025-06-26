# Decorators

Decorators are the function that can modify the class, method (but not work for function), properties,
or even parameters in the JavaScript.

It can change/add the behavior or metadata of the JS code.

### Different types of decorators are

- Class decorator,
- Method decorator,
- Property decorator
- Parameter decorator,
- Asynchronous decorator.

## Decorator Composition (nested decorator)

Multiple decorators can be applied to the same piece of code, and they’ll execute in a specific order.

```javascript

@requireAuth
@requireAdmin
class AdminDashboard {
    // ...
}
```

Here, requireAuth and requireAdmin are decorators that ensure the user is authenticated
and has admin privileges before accessing the AdminDashboard.

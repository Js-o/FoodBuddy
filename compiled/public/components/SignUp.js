'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignUp).call(this, props));

    _this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      errorMsg: '',
      successMsg: ''
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (event.target.name === 'SignUpName') {
        this.setState({
          username: event.target.value
        });
      } else if (event.target.name === 'SignUpPassword') {
        this.setState({
          password: event.target.value
        });
      } else if (event.target.name === 'SignUpFirstname') {
        this.setState({
          firstName: event.target.value
        });
      } else if (event.target.name === 'SignUpLastname') {
        this.setState({
          lastName: event.target.value
        });
      }
    }
  }, {
    key: 'enterNewUser',
    value: function enterNewUser() {
      if (this.state.username.length === 0) {
        this.setState({
          errorMsg: 'please enter a username'
        });
      } else if (this.state.password.length === 0) {
        this.setState({
          errorMsg: 'please enter a password'
        });
      } else if (this.state.firstName.length === 0) {
        this.setState({
          errorMsg: 'please enter your first name'
        });
      } else if (this.state.lastName.length === 0) {
        this.setState({
          errorMsg: 'please enter your last name'
        });
      } else {
        var userObj = {
          name: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };

        var that = this;

        $.post(Url + '/signup', userObj).then(function (reponse) {
          //after signup should prompt user to select their favorite three movies
          that.setState({
            errorMsg: '',
            successMsg: 'new login created'
          });

          that.props.changeViews("Home");
          that.props.setCurrentUser(that.state.username);
        }).catch(function (err) {
          console.log(err);
          that.setState({
            errorMsg: 'username already exist, please use a different username'
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      return React.createElement(
        'div',
        { className: 'landing row' },
        React.createElement(
          'div',
          { className: 'icon-block col s7' },
          React.createElement(
            'h2',
            { className: 'header logo' },
            'Welcome to TheMovieApp'
          ),
          React.createElement(
            'h5',
            { className: 'header col s12 light description' },
            'Lets find your next buddy by your movie taste!'
          )
        ),
        React.createElement(
          'div',
          { className: 'login icon-block' },
          React.createElement(
            'a',
            { className: 'waves-effect waves-light btn', onClick: function onClick() {
                return _this2.props.changeViews('Login');
              } },
            'Go to Log In'
          ),
          React.createElement(
            'div',
            { className: 'or' },
            '---------- OR -----------'
          ),
          React.createElement(
            'div',
            { className: 'loginForm' },
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'username', id: 'user_name', name: 'SignUpName', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'user_name', className: 'active' },
                'Username'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'password', id: 'password', name: 'SignUpPassword', type: 'password', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'password', className: 'active' },
                'Password'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'first name', id: 'first_name', name: 'SignUpFirstname', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'first_name', className: 'active' },
                'first name'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'last name', id: 'last_name', name: 'SignUpLastname', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'last_name', className: 'active' },
                'last name'
              )
            ),
            React.createElement(
              'div',
              { className: 'errorMsg' },
              this.state.errorMsg
            ),
            React.createElement(
              'a',
              { className: 'waves-effect waves-light btn', onClick: this.enterNewUser.bind(this) },
              'Sign Up!'
            )
          )
        )
      );
    }
  }]);

  return SignUp;
}(React.Component);

window.SignUp = SignUp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL1NpZ25VcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sTTs7O0FBRUosa0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBGQUNYLEtBRFc7O0FBR2pCLFVBQUssS0FBTCxHQUFhO0FBQ1gsZ0JBQVUsRUFEQztBQUVYLGdCQUFVLEVBRkM7QUFHWCxpQkFBVyxFQUhBO0FBSVgsZ0JBQVUsRUFKQztBQUtYLGdCQUFVLEVBTEM7QUFNWCxrQkFBWTtBQU5ELEtBQWI7QUFIaUI7QUFXbEI7Ozs7aUNBRVksSyxFQUFPO0FBQ2xCLFVBQUksTUFBTSxNQUFOLENBQWEsSUFBYixLQUFzQixZQUExQixFQUF3QztBQUN0QyxhQUFLLFFBQUwsQ0FBYztBQUNaLG9CQUFVLE1BQU0sTUFBTixDQUFhO0FBRFgsU0FBZDtBQUdELE9BSkQsTUFJTyxJQUFJLE1BQU0sTUFBTixDQUFhLElBQWIsS0FBc0IsZ0JBQTFCLEVBQTRDO0FBQ2pELGFBQUssUUFBTCxDQUFjO0FBQ1osb0JBQVUsTUFBTSxNQUFOLENBQWE7QUFEWCxTQUFkO0FBR0QsT0FKTSxNQUlBLElBQUksTUFBTSxNQUFOLENBQWEsSUFBYixLQUFzQixpQkFBMUIsRUFBNkM7QUFDbEQsYUFBSyxRQUFMLENBQWM7QUFDWixxQkFBVyxNQUFNLE1BQU4sQ0FBYTtBQURaLFNBQWQ7QUFHRCxPQUpNLE1BSUEsSUFBSSxNQUFNLE1BQU4sQ0FBYSxJQUFiLEtBQXNCLGdCQUExQixFQUE0QztBQUNqRCxhQUFLLFFBQUwsQ0FBYztBQUNaLG9CQUFVLE1BQU0sTUFBTixDQUFhO0FBRFgsU0FBZDtBQUdEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQixLQUErQixDQUFuQyxFQUFzQztBQUNwQyxhQUFLLFFBQUwsQ0FBYztBQUNaLG9CQUFVO0FBREUsU0FBZDtBQUdELE9BSkQsTUFJTyxJQUFJLEtBQUss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QVksWUFBbkIsRUFBZ0MsSUFBRyxZQUFuQyxFQUFnRCxNQUFLLGlCQUFyRCxFQUF1RSxNQUFLLE1BQTVFLEVBQW1GLFdBQVUsVUFBN0YsRUFBd0csVUFBVSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbEgsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBTyxPQUFJLFlBQVgsRUFBd0IsV0FBVSxRQUFsQztBQUFBO0FBQUE7QUFGRixhQVhGO0FBZ0JFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLG9CQUFmO0FBQ0UsNkNBQU8sYUFBWSxXQUFuQixFQUErQixJQUFHLFdBQWxDLEVBQThDLE1BQUssZ0JBQW5ELEVBQW9FLE1BQUssTUFBekUsRUFBZ0YsV0FBVSxVQUExRixFQUFxRyxVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUEvRyxHQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFPLE9BQUksV0FBWCxFQUF1QixXQUFVLFFBQWpDO0FBQUE7QUFBQTtBQUZGLGFBaEJGO0FBcUJFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFBMkIsbUJBQUssS0FBTCxDQUFXO0FBQXRDLGFBckJGO0FBc0JFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLDhCQUFiLEVBQTRDLFNBQVMsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQXJEO0FBQUE7QUFBQTtBQXRCRjtBQUhGO0FBUEYsT0FEQTtBQXFDRDs7OztFQXpIa0IsTUFBTSxTOztBQTZIM0IsT0FBTyxNQUFQLEdBQWdCLE1BQWhCIiwiZmlsZSI6IlNpZ25VcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZ25VcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgIHN1Y2Nlc3NNc2c6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ1NpZ25VcE5hbWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ1NpZ25VcFBhc3N3b3JkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdTaWduVXBGaXJzdG5hbWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdTaWduVXBMYXN0bmFtZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbnRlck5ld1VzZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudXNlcm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JNc2c6ICdwbGVhc2UgZW50ZXIgYSB1c2VybmFtZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvck1zZzogJ3BsZWFzZSBlbnRlciBhIHBhc3N3b3JkJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZpcnN0TmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvck1zZzogJ3BsZWFzZSBlbnRlciB5b3VyIGZpcnN0IG5hbWUnXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubGFzdE5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JNc2c6ICdwbGVhc2UgZW50ZXIgeW91ciBsYXN0IG5hbWUnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVzZXJPYmogPSB7IFxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IHRoaXMuc3RhdGUubGFzdE5hbWVcbiAgICAgIH07XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgJC5wb3N0KFVybCArICcvc2lnbnVwJywgdXNlck9iailcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcG9uc2UpIHtcbiAgICAgICAgLy9hZnRlciBzaWdudXAgc2hvdWxkIHByb21wdCB1c2VyIHRvIHNlbGVjdCB0aGVpciBmYXZvcml0ZSB0aHJlZSBtb3ZpZXNcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JNc2c6ICcnLFxuICAgICAgICAgIHN1Y2Nlc3NNc2c6ICduZXcgbG9naW4gY3JlYXRlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhhdC5wcm9wcy5jaGFuZ2VWaWV3cyhcIkhvbWVcIik7XG4gICAgICAgIHRoYXQucHJvcHMuc2V0Q3VycmVudFVzZXIodGhhdC5zdGF0ZS51c2VybmFtZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvck1zZzogJ3VzZXJuYW1lIGFscmVhZHkgZXhpc3QsIHBsZWFzZSB1c2UgYSBkaWZmZXJlbnQgdXNlcm5hbWUnXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmcgcm93Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJsb2NrIGNvbCBzNyc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXIgbG9nb1wiPldlbGNvbWUgdG8gVGhlTW92aWVBcHA8L2gyPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaGVhZGVyIGNvbCBzMTIgbGlnaHQgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBMZXRzIGZpbmQgeW91ciBuZXh0IGJ1ZGR5IGJ5IHlvdXIgbW92aWUgdGFzdGUhXG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbiBpY29uLWJsb2NrJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlVmlld3MoJ0xvZ2luJyl9PkdvIHRvIExvZyBJbjwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvclwiPi0tLS0tLS0tLS0gT1IgLS0tLS0tLS0tLS08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VyX25hbWVcIiBuYW1lPSdTaWduVXBOYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyX25hbWVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT0nU2lnblVwUGFzc3dvcmQnIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJmaXJzdCBuYW1lXCIgaWQ9XCJmaXJzdF9uYW1lXCIgbmFtZT0nU2lnblVwRmlyc3RuYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+Zmlyc3QgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwibGFzdCBuYW1lXCIgaWQ9XCJsYXN0X25hbWVcIiBuYW1lPSdTaWduVXBMYXN0bmFtZScgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+bGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JNc2dcIj57dGhpcy5zdGF0ZS5lcnJvck1zZ308L2Rpdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgb25DbGljaz17dGhpcy5lbnRlck5ld1VzZXIuYmluZCh0aGlzKX0+U2lnbiBVcCE8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KVxuICB9XG5cbn1cblxud2luZG93LlNpZ25VcCA9IFNpZ25VcDsiXX0=
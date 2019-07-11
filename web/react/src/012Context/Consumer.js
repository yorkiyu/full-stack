
import React from 'react';

const themes = {
    light: {
      foreground: '#000000',
      background: 'red',
    },
    dark: {
      foreground: '#ffffff',
      background: 'blue',
    },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});


function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => {
        return (
            <ThemeContext.Provider value={{ }}>
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background}}>
                    Toggle Theme
                </button>
            </ThemeContext.Provider>
        )
      }}
    </ThemeContext.Consumer>
  );
}

class Consumer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 整个 state 都被传递进 provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default Consumer;

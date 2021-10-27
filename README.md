<h1 align="center">TEMPLATE CLIENT 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> 이것은 템플릿 클라이언트입니다

## Author

👤 **Anderson**

- Website: https://chltjdrhd777.github.io/
- Github: [@chltjdrhd777@naver.com](https://github.com/chltjdrhd777@naver.com)
- Give a ⭐️ if this project helped you!

---

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br/>
(_이러면 좋겠다_)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">사용된(혹은 사용할) 스텍리스트</h3>

- [ReduxToolkit](https://redux-toolkit.js.org/)
- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [EmotionCSS](https://emotion.sh/docs/introduction)
- [Bootstrap](https://getbootstrap.com)

---

# design structure

<div align="left">
<br/>

0. 스타일은 스타일로, 기능은 기능으로 컴포넌트를 구분하여 관심사를 따로둔다

1. styled 폴더의 index에는 웹 전체에서 공용으로 사용될 styled component를 정리하고

2. 디자인적인 변경은 그 내부에서 class를 통해 정의함에 따라 필요에 따라 bootstrap처럼 클래스의 변경만으로 디자인이 유동적으로 변경되게 한다

3. styled 폴더 안에 네이밍이 된 파일들은 각 route를 뜻하며, 해당 내부에는 index의 베이스 컴포넌트를 물려받아 해당 페이지에서 어떤 컴포넌트가 사용되는지를 관리한다.

4. 또한 media query를 내부에 둠으로서, 사용된 컴포넌트들이 미디어쿼리를 통해 조절되도록 만든다.

5. 기능적인 분리는 styled 외부에 따로 정의함으로서, 기능적 재활용을 꿰한다

</div>

---

# styled refactor principle

<<스타일링을 위한 styled 컴포넌트의 분리 기준은>>

<div align="left">
<br/>

1. styled폴더 내에, 페이지에 이름을 가진 파일을 형성하고, 그 안에 차례대로 저장한다.(ex, Home.styled.ts). <br/>styled 컴포넌트를 나누는 기준은 큰 구획별로 나눈다 _**(ex/ Main => Container => Nav => NavHeading, NavLists)**_

2. (optional) 만약 특정 컴포넌트의 형태가 계속 반복적으로 재사용된다면, 해당 페이지로 명명한 폴더 내에 component 형태로 모아둔다._**(ex, components/Home)**_<br/> 이때 해당 컴포넌트들을 나중에 mediaQuery로서 styled.ts 파일에서 접근이 가능하도록 클래스를 붙인다.

<br/>
즉, 쪼갤때까지 쪼개서 컴포넌트로 몰아주고나서
<br/>
=> 클래스로 공통적으로 컨트롤해야될 것 같으면 쪼개지 않고 클래스로 붙여서 처리.
<br/>
=> 공용 컴포넌트여도 동일하게 클래스를 붙여서 처리한다. 이는 나중에 미디어 쿼리때 통일성을 유지하기 위해서이다.
</div>
<br/><br/>

> 한 영역에서만 계속 반복되고 다른 영역에서 쓰이진 않을 것 같다면 그냥 해당 내부에서 클래스명을 지정하여 코딩해도 괜찮다<br/>(routes/Home/sections/Hotels 의 그리드 영역 참조)

---

## Contact

My Email - [@google](chltjdrhd777@gmail.com) - chltjdrhd777@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

# ๐ผ Front End



### โ๏ธ Usage

```markdown
# react dependency & library ์ค์น
npm install

# react server ์คํ (3000 ํฌํธ)
npm start
```



###  โช๏ธ Library

```bash
'react-router-dom'        # Apply Domain Routing
'axios'                   # Asynchronous Request
'react-bootstrap'         # Apply Carousel & modal
'react-slick'             # For a apply Multi Carousel (Like Netflix...)
'slick-carousel'          # react-slcik CSS
'fontawesome 3 Pakage'    # for react UI font
  '@fortawesome/fontawesome-svg-core'
  '@fortawesome/free-solid-svg-icons'
  '@fortawesome/react-fontawesome'
'styled-components'       # apply for CSS in js
'poished'                 # interactive utill funcion
'qs'                      # using query string (์ฌ์ฉx)
'react-cookie'            # Using Cookie in Browser
'react-hook-form'         # for Using user input form
'jwt-decode'              # Do jwt decode library (using find user info)
'react-google-login'      # for social login of google
'react-paginate'          # apply paginate of items
'react-rating-starts-component'   # apply rating star for react
'react-icons'             # for react web icon
'react-material-ui'	      # using for various Form
'react-sticky-el'         # for a stick-component
```



## ๐   Core Feature

- #### [Common Feature]

  - Front - back ๊ด๊ณ์์ ์ํํ ์์ฒญ๊ณผ ์๋ต์ ํด๊ฒฐํ๊ธฐ ์ํด ๋น๋๊ธฐ ์์ฒญ(`Axios`) ์ํ
  - Styled-Components ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์๊ธฐ์, ๊ธฐ์กด css๋ฅผ ์ฌ์ฉํ์ ๋์ ๋จ์ ์ธ ๋ณต์กํ ํ์ผ๊ตฌ์กฐ๋ฅผ ํด์ํ๋ฉฐ ๊ฐ ์ปดํฌ๋ํธ์ ๋๋ฆฝ์ ์ธ ๋ค์ด๋ฐ์ ๊ตฌํ
  - React-Hook์ ์ฌ์ฉํ์ฌ, ์ํ๊ด๋ฆฌ๋ฅผ ์ํ useState, ๋ผ์ดํ์ฌ์ดํด๋ก ์์ฉ๋๋ useEffect ์ด์ฉํจ์ผ๋ก์ ํจ์ํ ์ปดํฌ๋ํธ๋ก์ ํ๊ฒฝ์ ๊ตฌ์ถ
  - ์น ๋ธ๋ผ์ฐ์ ์ cookie๋ฅผ ์ด์ฉํ์ฌ JWT ํ ํฐ์ ์ ์ฅํ๊ณ , ์ด๋ฅผ ์ด์ฉํ์ฌ ๋ก๊ทธ์ธ ์ฌ๋ถ๋ฅผ ํ๋จํ๊ณ  ๋์ฝ๋ฉ์ ํตํ ์ต์ํ์ ์ ๋ณด๋ฅผ ์ด์ฉํ์ฌ ๊ฒ์ฆ ์ํ
  - ํ์๊ฐ์์ ์ ๊ทํํ์์ ํตํ ๊ฒ์ฆ๊ณผ ํจ๊ป ์ค๋ณตํ์ธ, ์ธ์ฆ๋ฒํธ ๋ฑ์ ์์ฐจ์ ์ธ ํ๋ก์ธ์ค๊ฐ ์งํ๋  ์ ์๋๋ก JSX ์ ์ด๋ฌธ( &&, ์ผํญ์ฐ์ฐ์ )์ ํ์ฉํ์๊ณ , ํนํ ์ธ์ฆ๋ฒํธ๋ฅผ ์ก์ ํ๋ ๊ฒฝ์ฐ, Spinner๋ฅผ ๋ณด์ฌ์ฃผ๋ฉฐ ์๊ฐ์์ ๊ณต๋ฐฑ์ ์ค์ฌ๋ณด๋ ค ๋ธ๋ ฅ..

- #### [Header Page]

  - `๊ฒ์` : ์ฌ์ฉ์์ ์ํ๊ด๋ฆฌ๋ฅผ ์ํ useState๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์์ ์๋ ฅ๊ฐ์ ๋ฐ๊ณ , Enter ํน์ Click ์ด๋ฒคํธ๋ฅผ ํตํด ๊ฒฐ๊ณผ ํ์ด์ง๋ก ์ ํ
  - `์ฅ๋ฅด ํ๊ทธ MouseOver`: ์ฌ์ฉ์๊ฐ '์ฅ๋ฅด'๋ฒํผ์ ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆด ์์, state์ props๋ฅผ ๋ฐ์ ์๋ก์ด ์ปดํฌ๋ํธ(`CategoryHoverDetail.js`)๋ฅผ ์๊ฐํ ํ๋ ๊ธฐ๋ฅ์ ๊ตฌํ

- #### [MainPage]

  - `์ปค๋ฎค๋ํฐ์ ์์  ์ญ์  ๊ฒ์ฆ` : ์น ๋ธ๋ผ์ฐ์ ์ cookie๋ฅผ ๋์ฝ๋ฉํ์ฌ ๊ฒ์๊ธ์ ๋์ผ์ธ ์ฌ๋ถ๋ฅผ ํ๋จํ๊ณ  ํด๋น ๊ธฐ๋ฅ ๋ฒํผ์ ์๊ฐํ ๊ณผ์ 
  - `์ปค๋ฎค๋ํฐ ๋๊ธ ๋ฐ ๋๋๊ธ` :  Back-end๋ก์ ๋๊ธ์์ฒญ์ ๋ํ ์๋ต๋ฐ์ดํฐ๋ฅผ ํตํด ๋๊ธ์ ๊น์ด๋ฅผ props๋ก ๋ฐ์, ๋จ์๋ง๋ค์ ๋ค์ฌ์ฐ๊ธฐ ๊ธฐ๋ฅ ์ํ
  - `์์ธ ๋์์ ์ฅ๋ฐ๊ตฌ๋/๋ฐ๋ก๊ตฌ๋งค`: ์ฅ๋ฐ๊ตฌ๋ ๋ฒํผ์ ๋๋ฅด๋ฉด ์์ฒญ์ ํตํด ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ํด๋น ์์ดํ์ ์ ์ฅ, ๋ฐ๋ก๊ตฌ๋งค์ ์ฅ๋ฐ๊ตฌ๋ ๊ธฐ๋ฅ๊ณผ ํจ๊ป ์ฅ๋ฐ๊ตฌ๋๋ก์ ํ์ด์ง ์ด๋
  - `์์ธ ๋์์ ๋ฆฌ๋ทฐ` : ๋ฆฌ๋ทฐ๋ฅผ ์ํ ๋ณ์ ๊ธฐ๋ฅ ์ถ๊ฐ, Hover๋ฅผ ํตํด ๋ณ์ ์๊ฐํ, Click์ ํตํด ์ ํ์ ์ด์ฉ
  - `ํ ํ์ด์ง์ ๋๋ค ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋` : ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ์ฌ Multi Carousel๋ฅผ ๊ตฌํํ๋ฉด์ ์๋ต์ผ๋ก ๋ฐ์ ๋๋ค ์ด๋ฏธ์ง๋ฅผ ์๊ฐํ / ์ปค์คํํ Next / Prev ํ์ดํ ๋ฒํผ์ ํตํด ์ด๋ฏธ์ง ์ ์ด ์ฌ๋ผ์ด๋ ์ด์ฉ

- #### [UserPage]

  - `์ผ๋ฐ ์ ์ ์ ์ฅ๋ฐ๊ตฌ๋`: ์ฅ๋ฐ๊ตฌ๋์ ๋ด์ฉ์ state๋ก ์ ์ฅํ๊ณ , ์ฒดํฌ๋ฐ์ค๋ฅผ ์ด์ฉํ ์์ดํ ์ ํ/ํด์ , ์์ดํ์ ์๋๋ณ๊ฒฝ, ์ฅ๋ฐ๊ตฌ๋ ์์ดํ์ญ์ , ์ ์ฉํ  ์ฟ ํฐ ์ ํ, ์ ์ฒด ๋น์ฉ ๊ณ์ฐ ๊ธฐ๋ฅ์ ์ํ 
  - `์ผ๋ฐ์ ์ ์ ์ฃผ๋ฌธ๋ด์ญ`: ์ฌ์ฉ์๊ฐ ์ฃผ๋ฌธํ ๋ด์ญ์ ๋ณด์ฌ์ค ์ ์๋๋ก ํ๋ฉฐ, ๋ฐฐ์ก์์์  ๋ฐฐ์ก ์ทจ์๊ฐ๋ฅ, ๋ํ ์์ธ๋ณด๊ธฐ๋ฅผ ํตํด ์ฌ์ฉ์๊ฐ ๊ตฌ๋งคํ ์์ดํ๋ค๊ณผ ๋ฐฐ์ก์ํ๋ฅผ Progress Bar๋ก ์๊ฐํ
  - `์ผ๋ฐ์ ์ ํ์ด์ง์ ์ค์ฒฉ๋ผ์ฐํ`: ๋ง์ดํ์ด์ง ๋ด์์๋ ๊ฐ์ธ์ ๋ณด/ ๋ด ๊ธ๋ณด๊ธฐ/ ์ฃผ๋ฌธ๋ด์ญ ๊ธฐ๋ฅ์ ์ด์ฉํ  ์ ์๋๋ก ์ค์ฒฉ๋ผ์ฐํ ๊ตฌํ

- #### [AdminPage]

  - `๊ด๋ฆฌ์์ ์ํ๊ด๋ฆฌ` : ๊ด๋ฆฌ์๋ ์ฌ์ฉ์๊ฐ ๋ณด๋ ์ ์ฒด ์์ดํ์ ๊ด๋ฆฌํ๊ธฐ ๋๋ฌธ์ ๋ง์ ๋ฐ์ดํฐ๋ฅผ ๋ถํ ์ ์ผ๋ก ๋ณผ ์ ์๋๋ก ์์ดํ ๋ฆฌ์คํธ์ Pagination์ ์ ์ฉ
  - `๊ด๋ฆฌ์ํ์ด์ง์ ์ค์ฒฉ๋ผ์ฐํ`: ๊ด๋ฆฌ์ ํ์ด์ง ๋ด์์๋ ์ ์ ์ ๋ณด/ ๋ฌผํ๊ด๋ฆฌ/ ์ฃผ๋ฌธ๊ด๋ฆฌ๋ฅผ ์ด์ฉํ  ์ ์๋๋ก ์ค์ฒฉ๋ผ์ฐํ ๊ตฌํ



### ๐ฆ File Structure (In Progress...)

```bash
books
โโโ README.md
โโโ node_modules
โโโ package-lock.json
โโโ package.json
โโโ .gitignore
โโโ public
โ 	โโโ favicon.ico
โ 	โโโ index.html
โโโ src
โโโ App.js
โโโ icons
โ	โโโ books.jpg
โ 	โโโ open-book.jpg
โโโ index.css
โโโ index.js
โโโ components
โ	โโโ HeaderPage
โ	โ	โโโ CategoryBar.js			# ์ฅ๋ฅด / ๋ฒ ์คํธ / ์ ๊ฐ / ์ปค๋ฎค๋ํฐ ๋ณ๋ก Link๋๋ ์ปดํฌ๋ํธ
โ	โ	โโโ CategoryHoverDetail.js		# ์ฅ๋ฅด ๋ฒํผ์ Mouse Over์ display๋๋ ์ปดํฌ๋ํธ
โ	โ	โโโ Header.js				# Header Container
โ	โ	โโโ SearchBar.js			# ์ ๋ชฉ๋ณ ๊ฒ์๊ธฐ๋ฅ
โ	โโโ MainPage
โ	โ	โโโ BookListPage
โ	โ	โ	โโโ BestBookList.js		# ๋ฒ ์คํธ ์์ดํ ๋ฆฌ์คํธ
โ	โ	โ	โโโ NewBookList.js		# ์ ๊ฐ ์์ดํ ๋ฆฌ์คํธ
โ	โ	โ	โโโ SearchBookList.js		# ๊ฒ์ ๊ฒฐ๊ณผ ์์ดํ ๋ฆฌ์คํธ
โ	โ	โโโ CommunityPage
โ	โ	โ	โโโ Community.js		# ์ ์ฒด ์ปค๋ฎค๋ํฐ ์ปดํฌ๋ํธ
โ	โ	โ	โโโ CommunityDetail.js		# ์์ธ ์ปค๋ฎค๋ํฐ ๊ฒ์๊ธ + ๋๊ธ 
โ	โ	โ	โโโ ArticleDetail.js		# ์์ธ ์ปค๋ฎค๋ํฐ ๊ฒ์๊ธ
โ	โ	โ	โโโ CommentDetail.js		# ์์ธ ์ปค๋ฎค๋ํฐ ๋๊ธ
โ	โ	โ	โโโ EachComment.js		# ๊ฐ ๋๊ธ ์ปดํฌ๋ํธ
โ	โ	โ	โโโ CommunityRegister.js	# ๊ฒ์๊ธ ๋ฑ๋ก
โ	โ	โ	โโโ CommunityUpdate.js		# ๊ฒ์๊ธ ์์ (์๋ฐ์ดํธ)
โ	โ	โโโ DetailPage
โ	โ	โ	โโโ ItemDetail.js		# ์์ธ ๋์ ์ปดํฌ๋ํธ
โ	โ	โ	โโโ TopDetail.js		# ์ฑ์ ์ด๋ฏธ์ง / ์ ๋ชฉ / ์ ์ / ์ถํ์ฌ / ๊ฐ๊ฒฉ / ์ฌ๊ณ  + ์ฅ๋ฐ๊ตฌ๋ / ๋ฐ๋ก๊ตฌ๋งค
โ	โ	โ	โโโ MidDetail.js		# ์ฑ์ ์ค๋ช
โ	โ	โ	โโโ ReviewList.js		# ์ฑ์ ๊ตฌ๋งคํ ์ ์ ์ ๋๊ธ ๋ฐ ํ์  ๋ฆฌ์คํธ
โ	โ	โ	โโโ Review.js			# ๊ฐ ๋๊ธ ์ปดํฌ๋ํธ
โ	โ	โโโ HomePage
โ	โ	โ	โโโ Home.js			# ๋ฉ์ธ ํ ํ๋ฉด
โ	โ	โ	โโโ SlideItem.js		# ํ๋์ ๋์์ ๋ํ ์ฌ๋ผ์ด๋
โ	โ	โ	โโโ PickItem.js			# ๋๋ค 4๊ฐ์ ๋์์ ๋ํ ๋ฉํฐ ์ฌ๋ผ์ด๋
โ	โ	โ	โโโ MonthBooks.js		# ๋๋ค 4๊ฐ์ ๋์์ ๋ํ ๋ฉํฐ ์ฌ๋ผ์ด๋
โ	โ	โ	โโโ CustomArrow
โ	โ	โ		โโโ NextArrow.css	# ๋ค์ ์ฌ๋ผ์ด๋ ์ ์ด ๋ฒํผ CSS		
โ	โ	โ		โโโ NextArrow.js	# ๋ค์ ์ฌ๋ผ์ด๋ ์ ์ด ๋ฒํผ
โ	โ	โ		โโโ PrevArrow.css	# ์ด์  ์ฌ๋ผ์ด๋ ์ ์ด ๋ฒํผ CSS
โ	โ	โ		โโโ prevArrow.js	# ์ด์  ์ฌ๋ผ์ด๋ ์ ์ด ๋ฒํผ
โ	โ	โโโ UserPage
โ	โ		โโโ Admin
โ	โ		โ	โโโ AllOrderListComponent
โ	โ		โ	โ	โโโ AllOrderList.js	# ๋ชจ๋  ์ ์  ๋ชฉ๋ก
โ	โ		โ	โ	โโโ EachUserOrder.js	# ๊ฐ ์ ์ ์ ์ฃผ๋ฌธ ๋ด์ฉ
โ	โ		โ	โ	โโโ UserOrder.js	# ๊ฐ ์ ์ ์ ์์ธ ์ฃผ๋ฌธ ๋ด์ฉ
โ	โ		โ	โโโ AdminPage.js		# ๊ด๋ฆฌ์ ์ปดํฌ๋ํธ
โ	โ		โ	โโโ AllItemList.js		# ๋ฑ๋ก๋ ์ ์ฒด ์ํ ๋ฆฌ์คํธ
โ	โ		โ	โโโ EachItemList.js		# ๊ฐ ์ํ ์ ์ด ์ปดํฌ๋ํธ
โ	โ		โ	โโโ PostCoupon.js		# ์ฟ ํฐ ๋ฑ๋ก ํ์ด์ง
โ	โ		โ	โโโ UserList.js			# ๋ชจ๋  ์ ์  ๋ฆฌ์คํธ	
โ	โ		โ	โโโ UserArticle.js		# ์ ์ ์ ๊ฒ์๊ธ ๋ฆฌ์คํธ
โ	โ		โโโPublic
โ	โ		โ	โโโ CartPageComponent
โ	โ		โ	โ	โโโ CartPage.js		# ์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง
โ	โ		โ	โ	โโโ CouponItem.js	# ์ฟ ํฐ ์ ํ ์ปดํฌ๋ํธ (์ ์ฉ ๋ฐ ๋ฏธ์ ์ฉ ๊ธ์ก ๋ณด์ฌ์ฃผ๊ธฐ) 
โ	โ		โ	โ	โโโ EachCartItem.js	# ์ฅ๋ฐ๊ตฌ๋์ ๋ด๊ธด ์์ดํ ์กฐ์(์๋, ์ฒดํฌ๋ฐ์ค) ์ปดํฌ๋ํธ
โ	โ		โ	โโโ OrderComponent
โ	โ		โ	โ	โโโ OrderList.js	# ์ฃผ๋ฌธํ ๋ชฉ๋ก์ ํญ๋ชฉ ๋ฆฌ์คํธ
โ	โ		โ	โ	โโโ OrderPage.js	# ์ฃผ๋ฌธํ ๊ฐ ์์ดํ ์ ๋ณด ์ปดํฌ๋ํธ
โ	โ		โ	โโโ MyPage.js			# ๊ฐ์ธ์ ๋ณด ์ ์ฒด ์ปดํฌ๋ํธ
โ	โ		โ	โโโ MyPost.js			# ๊ฐ์ธ์ด ๋ฑ๋กํ ๊ฒ์๊ธ์ ๋ณด๋ ์ปดํฌ๋ํธ
โ	โ		โ	โโโ UserInfo.js			# ๊ฐ์ธ ์ ๋ณด ์ปดํฌ๋ํธ
โ	โ		โโโ LoginPage			# ๋ก๊ทธ์ธ ํ์ด์ง
โ	โ		โโโ SignupPage			# ํ์๊ฐ์ ํ์ด์ง
โ	โโโ FooterPage
โ		โโโ Footer.js				# Footer
โโโ Features
	โโโ GenreMap.js		# ์ฅ๋ฅด๋ณ ID๊ฐ์ ์ฅ๋ฅดํญ๋ชฉ(ํญ๋ชฉ)์ผ๋ก ๋ณํ
	โโโ JwtDecode.js		# ์์ ๋ฐ์ JWT ํ ํฐ์ ๋์ฝ๋ํ๋ ํจ์
	โโโ ETC...
```



## ๐ค๐ค ํ๊ณ 

```markdown
์ด๋ฐ, react์ ์ปดํฌ๋ํธ ๊ตฌ์กฐ์ state๊ด๋ฆฌ๋ฅผ ์ดํดํ๋๋ฐ ์๊ฐ์ ๋ง์ด ๋ค์์ง๋ง, ๊ถ๊ธ์ฆ์ ๊ฐ์ง๊ณ  ๋ฐฐ์ฐ๋ ค๊ณ  ๋ธ๋ ฅํ๋ ์ ์  ์์๊ฐ๋๊ฒ ๋ง์์ก๋ค. 
ํ์ง๋ง ๊ทธ๋งํผ ์ง๊ธ ํ๋ก์ ํธ์์์ ๋ถ์กฑํ ์ ์ด ๋ณด์ด๊ธฐ ์์ํ์๊ณ , ๋ง์ ๋ถ๋ถ์ด ์์ฌ์์ผ๋ก ๋จ์๋ค.

๐ฅ ์์ฌ์ด ์ 
- React Redux๋ฅผ ์ด์ฉํ ์ค์ ์ง์ค์์ ์ํ๊ด๋ฆฌ (์ํ๊ด๋ฆฌ๋ฅผ ํ๋๋ฐ ์์ด์ ๋ง์ ์ฝ๋๊ฐ ๋ญ๋น๋๋ค๊ณ  ๋๊ปด์ก์)
- ์ปดํฌ๋ํธ์ ๊ตฌ์กฐ๋ฅผ ์ฒด๊ณํํ์ฌ ์ฌํ์ฉ ์ฝ๋ ๊ตฌํ ๋ฐ ๋ฆฌํฉํ ๋ง
- Material UI๋ฅผ ์ด์ฉํ์ฌ ๋์ฑ ๋งค๋ ฅ์ ์ธ ํ์ด์ง ๊ตฌ์ถ
```


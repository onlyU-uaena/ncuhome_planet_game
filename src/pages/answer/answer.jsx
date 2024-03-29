import React, {Component} from 'react'
import {CSSTransition} from "react-transition-group"
import {connect} from 'react-redux'
import '../../index.css'
import {Redirect} from 'react-router-dom'
import './answer.scss'
import ImgDesigner from '../../assets/designer1.png'
import ImgOpenHair from '../../assets/openHair1.png'
import ImgOperation from '../../assets/operation1.png'
import ImgAdmin from '../../assets/admin1.png'
import ImgProduct from '../../assets/producter1.png'
import one from '../../assets/components/001.png'
import two from '../../assets/components/002.png'
import three from '../../assets/components/003.png'
import four from '../../assets/components/004.png'
import five from '../../assets/components/005.png'
import confirmInput from '../../assets/components/confirmInput.png'
import answerFrame from '../../assets/components/answerFrame.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import API from '@/api/api'

class Answer extends Component {
	state = {
		leave: true,
		question: [],
		selectIndex: -1,
		answer: '',
		backgroundImg: '',
		numberImg: ''
	}

	toggle = (event) => {
		let index = Number(event.target.getAttribute('index'))

		this.setState({
			answer: event.target.getAttribute('value')
		})
		this.state.selectIndex === index ? this.setState({
			selectIndex: -1
		}) : this.setState({
			selectIndex: index
		})
	}

	nextQuestion = async (event) => {
		let index = Number(event.target.getAttribute('index')) + 1
		if (index < 6) {
			let data = {
				question: event.target.getAttribute('question'),
				question_id: index,
				answer: this.state.answer,
				groups: this.props.group,
				username: this.props.username
			}
			let result = await API.nextQuestion(data)
			if (result.spark === true) {
				this.setState(
					{
						leave: false
					}
				)
				setTimeout(() => {
					this.props.history.replace('/boom')
				}, 500)
			} else if (result.status === 1) {
				this.setState({
					selectIndex: -1
				})
				if (index > 4) {
					this.setState(
						{
							leave: false
						}
					)
					setTimeout(() => {
						this.props.history.replace('/end')
					}, 500)
				} else if (index < 5) {
					let question = this.state.question
					question[index] = this.props.question[index].data
					this.setState({
						question: question
					})
					this.state.swiper.update()
					this.state.swiper.slideTo(index, 500, false)
				}
			}
		}
	}

	componentDidMount () {
		// eslint-disable-next-line no-unused-vars
		let swiper = new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				hideOnClick: true,
				hiddenClass: 'my-button-hidden',
				disabledClass: 'my-button-disabled'
			}
		})
		let question = []

		this.setState({
			swiper: swiper
		})
		question.push(this.props.question[0].data)
		this.setState({
			question: question
		})
		switch (this.props.group) {
			case '研发组':
				this.setState({
					backgroundImg: ImgOpenHair,
					numberImg: five
				})
				break
			case '产品组':
				this.setState({
					backgroundImg: ImgProduct,
					numberImg: one
				})
				break
			case '运营组':
				this.setState({
					backgroundImg: ImgOperation,
					numberImg: two
				})
				break
			case '设计组':
				this.setState({
					backgroundImg: ImgDesigner,
					numberImg: three
				})
				break
			case '行政组':
				this.setState({
					backgroundImg: ImgAdmin,
					numberImg: four
				})
				break
		}
	}

	render () {
		return (
			<CSSTransition
				in={this.state.leave}
				appear={true}
				classNames="fade"
				timeout={500}
			>
				<div className='answer'>
					<img src={this.state.backgroundImg} alt='背景'/>
					<img className='answerFrame' src={answerFrame} alt='答题框'/>
					<div className='question'>
						<img className='numberImg' src={this.state.numberImg} alt='数字'/>
						<div className='swiper-container'>
							<div className='swiper-wrapper'>
								{this.state.question.map((item, index) => (
									<div className='swiper-slide' key={index}>
										<h4>
											{item.question}
										</h4>
										<ul>
											<li onClick={this.toggle} index='1' value='A' className={this.state.selectIndex === 1 ? 'beSelect' : null}>A&#32;{item.A}</li>
											<li onClick={this.toggle} index='2' value='B' className={this.state.selectIndex === 2 ? 'beSelect' : null}>B&#32;{item.B}</li>
											<li onClick={this.toggle} index='3' value='C' className={this.state.selectIndex === 3 ? 'beSelect' : null}>C&#32;{item.C}</li>
										</ul>
										<button index={index} question={item.question} onClick={this.nextQuestion}>
											确定提交
										</button>
										<img className='confirmInput' src={confirmInput} alt='确认提交'/>
									</div>
								))}
							</div>
						</div>
						<div className="swiper-pagination">
						</div>
						<div className="swiper-button-prev">
						</div>
						<div className="swiper-button-next">
						</div>
					</div>
					{this.props.login ? null : <Redirect to='/'/>}
				</div>
			</CSSTransition>
		)
	}
}

const mapStateToProps = state => {
	return {
		login: state.hasLogin,
		question: state.question,
		group: state.group,
		username: state.username
	}
}

export default connect(mapStateToProps, null)(Answer)
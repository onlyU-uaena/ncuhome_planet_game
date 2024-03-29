import React, {Component} from 'react'
import './choose_class.scss'
import {connect} from 'react-redux'
import {CSSTransition} from "react-transition-group"
import {loadQuestion, loadGroups} from '@/store/action'
import '../../index.css'
import {Redirect} from 'react-router-dom'
import ImgOpenHair from '../../assets/openHair.png'
import planetOpenHair from '../../assets/components/openHair.png'
import ImgDesigner from '../../assets/designer.png'
import planetDesigner from '../../assets/components/designer.png'
import ImgOperation from '../../assets/Operation.png'
import planetOperation from '../../assets/components/operation.png'
import ImgProducts from '../../assets/Products.png'
import planetProducts from '../../assets/components/product.png'
import ImgAdministrative from '../../assets/Administrative.png'
import planetAdministrative from '../../assets/components/Admin.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import API from '@/api/api'


class ChooseClass extends Component{
	state = {
		leave: true
	}

	componentDidMount () {
		// eslint-disable-next-line no-unused-vars
		let swiper = new Swiper('.swiper-container', {
			loop: true,
			effect : 'flip'
		})
	}

	sendClass = async (event) => {
		let data = {
			groups: event.target.getAttribute('index'),
			username: this.props.username
		}
		this.props.loadGroups(event.target.getAttribute('index'))
		let result = await API.sendClass(data)
		if (result[0].status === 1) {
			setTimeout(() => {
				this.props.history.replace('/answer')
			}, 500)
			let question = []
			let i = 0
			for (i; i < 5; i++) {
				question.push(result[i].data)
			}
			this.props.loadQuestion(question)
			this.setState({
				leave: false
			})
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
				<div className='chooseClass'>
					<div className='swiper-container'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide'>
								<img src={ImgOpenHair} alt='开发'/>
								<div className='click' onClick={this.sendClass}>
									<img className='planet' index='研发组' src={planetOpenHair} alt='研发星球'/>
								</div>
							</div>
							<div className='swiper-slide'>
								<img src={ImgDesigner} alt='设计'/>
								<div className='click' onClick={this.sendClass}>
									<img className='planet' index='设计组'  src={planetDesigner} alt='设计星球'/>
								</div>
							</div>
							<div className='swiper-slide'>
								<img src={ImgOperation} alt='运营'/>
								<div className='click' onClick={this.sendClass}>
									<img className='planet' index='运营组' src={planetOperation} alt='运营星球'/>
								</div>
							</div>
							<div className='swiper-slide'>
								<img src={ImgProducts} alt='产品'/>
								<div className='click' onClick={this.sendClass}>
									<img className='planet' index='产品组' src={planetProducts} alt='产品星球'/>
								</div>
							</div>
							<div className='swiper-slide'>
								<img src={ImgAdministrative} alt='行政'/>
								<div className='click' onClick={this.sendClass}>
									<img className='planet' index='行政组' src={planetAdministrative} alt='行政星球'/>
								</div>
							</div>
						</div>
						{this.props.login ? null : <Redirect to='/'/>}
					</div>
				</div>
			</CSSTransition>
		)
	}
}

const mapStateToProps = state => {
	return {
		login: state.hasLogin,
		username: state.username
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadQuestion: (content) => dispatch(loadQuestion(content)),
		loadGroups: (content) => dispatch(loadGroups(content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseClass)
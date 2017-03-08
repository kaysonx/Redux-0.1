import React, { Component } from 'react'
import Radium from 'radium'
import { Card } from 'material-ui/Card'
import { Link } from 'react-router'
import CourseActions from './CourseActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//用React.createClass就不能写方法了。
class Course extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         likes: this.props.course.likes
    //     }
    // }

    // increment() {
    //     this.setState({ likes: this.state.likes + 1 })
    // }

    getStyles() {
        return {
            root: {
                margin: '0 2rem 4rem',
                flexBasis: '100%',
                '@media (min-width: 600px)': {
                    flexBasis: 'calc(50% - 4rem)'
                }
            },
            imgWrap: {
                position: 'relative'
            },
            img: {
                width: '100%',
                display: 'block'
            }
        }
    }
    render() {
        const { course } = this.props
        let styles = this.getStyles()
        return (
            <div style={styles.root}>
                <Card>
                    <div style={styles.imgWrap}>
                        <Link to={`/view/${course.id}`}>
                            <img src={course.image} alt={course.name} style={styles.img} />
                        </Link>
                        <span className='likes-heart'>{course.likes}</span>
                    </div>
                    <ReactCSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={course.likes} className='likes-heart'>{course.likes}</span>
                    </ReactCSSTransitionGroup>
                    <CourseActions course={course}  comments={this.props.comments} increment={this.props.increment}  />
                </Card>
            </div>
        )
    }

}

export default Radium(Course);
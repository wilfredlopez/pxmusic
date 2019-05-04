import React from 'react'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate'
import $ from 'jquery'

window.React = React;

export class MusicList extends React.Component {
    static propTypes = {
      data: PropTypes.array.isRequired,
    };

    render(){
     let songs = this.props.data.map((song, index) => {
         return (             
             <div className="card mb-4" key={index} id={song._id}>
                 <div className="card-header text-center">
                     <img src={song.img} className="img-fluid" alt={song.name}/>
                 </div>
             <div className="card-body">
                 <h5 className="card-title  text-center">
                 <figure>
                 <figcaption>{song.name}</figcaption>
                 </figure>
                 <audio controls preload="none">
                     <source src={song.url}type="audio/mpeg"/>
                 Your browser does not support the audio element.
                 </audio>
                 </h5>
                 <div className="row ">
                     <div className="col">
                         <p className="card-text text-left"><i className="font-weight-bold">Genero:</i>
                         <a href={"/music/"+song.category.toLowerCase()}> {song.category}</a></p>
                     </div>
                     <div className="col">
                     <p className="card-text text-right"><i className="font-weight-bold">Descargas:</i> {song.downloads}</p>
                 </div>
                 </div> 
             </div>
             </div>
             )
     })

     return (
        <div id="project-comments" className="commentList">
        <ul>{songs}</ul>
      </div>
     )
     }
 }

 
export class SongList extends React.Component{
    static propTypes = {
        url: PropTypes.string.isRequired,
        perPage: PropTypes.number.isRequired,
      }
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          offset: 1
        };
      }

      handlePageClick = data => {
        let selected = data.selected
        console.log('selected', selected)
        //let offset = Math.ceil(selected * this.props.perPage) 
        let offset = selected + 1

        console.log('offset', offset)
    
        this.setState({ offset: offset }, () => {
            this.loadCommentsFromServer();
        });
      };

      loadCommentsFromServer() {
        $.ajax({
            url: this.props.url+`?page=${this.state.offset}`,
            data: { limit: this.props.perPage, offset: this.state.offset },
            dataType: 'json',
            type: 'GET',
    
          success: data => {
            this.setState({
              data: data.docs,
              pageCount: Math.ceil(data.totalDocs / data.limit),
            });
          },
          error: (xhr, status, err) => {
            console.error(this.props.url, status, err.toString()); // eslint-disable-line
          },
        });
      }
    
      componentDidMount() {
        this.loadCommentsFromServer()
      }

    render() {
        return (
        <div>
            <div className="commentBox">
                <MusicList data={this.state.data} />
                <ReactPaginate
                    previousLabel={'Anterior'}
                    nextLabel={'Siguiente'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
                </div>
        </div>
        )
    }
}
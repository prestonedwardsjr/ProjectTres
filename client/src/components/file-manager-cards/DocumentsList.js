import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Document, Page } from 'react-pdf';
import parentConsent from '../../images/file-manager/parentConsent.pdf'

import { Row, Col, Card, CardBody, CardFooter } from "shards-react";

class ComponentName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  // componentDidMount() {
  //   const fakePDF = atob(
  //     'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
  //     'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
  //     'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
  //     'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
  //     'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
  //     'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
  //     'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
  //     'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
  //     'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
  //     'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
  //     'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
  //     'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
  //     'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G');
  //   console.log(fakePDF);
  // }

  /**
   * Changes the selected state for a specific document.
   */
  handleDocumentClick(file) {
    const newState = { ...this.state };
    this.setState({
      ...(newState.documents[newState.documents.indexOf(file)] = {
        ...file,
        selected: !file.selected
      })
    });
  }

  render() {
    const { documents } = this.state;
    return (
      <Row>
        {documents.map((file, idx) => {
          const classes = classNames(
            "mb-3",
            "file-manager__item",
            file.selected && "file-manager__item--selected"
          );

          return (
            <Col lg="3" sm="6" key={idx}>
              <Card
                small
                className={classes}
                onClick={() => this.handleDocumentClick(file)}
              >
                <CardBody className="file-manager__item-preview px-0 pb-0 pt-4">
                  {/* <img src={file.image} alt={file.title} /> */}

                  <embed src={`${parentConsent}`} width="400px" height="600px" />
                  
                </CardBody>
                <CardFooter className="border-top">
                  <span className="file-manager__item-icon">
                    <i className="material-icons">&#xE24D;</i>
                  </span>
                  <h6 className="file-manager__item-title">{file.title}</h6>
                  <span className="file-manager__item-size ml-auto">
                    {file.size}
                  </span>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

ComponentName.propTypes = {
  /**
   * The documents array.
   */
  documents: PropTypes.array
};

ComponentName.defaultProps = {
  documents: [
    {
     id: 1,
     title: "Parent Consent Email",
     size: "",
     image: require("../../images/file-manager/parentConsent.pdf"),
     selected: false
    },
    // {
    //   id: 2,
    //   title: "School Consent",
    //   size: "12kb",
    //   image: require("../../images/file-manager/parentConsent.doc"),
    //   selected: false
    // },
    // {
    //   id: 3,
    //   title: "Lorem Ipsum Document",
    //   size: "12kb",
    //   image: require("../../images/file-manager/document-preview-1.jpg"),
    //   selected: false
    // },
    // {
    //   id: 4,
    //   title: "Lorem Ipsum Document",
    //   size: "12kb",
    //   image: require("../../images/file-manager/document-preview-1.jpg"),
    //   selected: false
    // }
  ]
};

export default ComponentName;

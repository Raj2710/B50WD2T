import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BlogTile({blog}) {
  return <>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={blog.imageUrl} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default BlogTile
import styled from 'styled-components'
import { PDFViewer } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';

export const StyledPDFViewer = styled(PDFViewer)`
  width: 100%;
  height: 800px;
`

export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1
  },
  inline: {
    display: "flex",
    flexDirection: "row"
  },
  h1: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
  },
  h3: {
    fontSize: 14,
  },
  headerH1: {
    fontSize: 18,
  },
  Paragraph: {
    fontSize: 14,
  },
  header: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  headerImage: {
    width: '150px',
    marginRight: 10,
    borderRadius: 2,
    border: 1
  },
  headerLeftSection: {
    flexGrow: 1,
    border: 1,
    padding: 10,
    verticalAlign: 'baseline'
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    fontSize: 14,
    color: '#0043ce',
    backgroundColor: '#d0e2ff',
    border: 2,
    borderColor: '#0043ce',
    paddingLeft: 8,
    paddingTop: 6,
    paddingRight: 3,
    paddingBottom:3,
    margin: 5,
  },
});

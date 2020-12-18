
export const colors = [ 
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
  "darkViolet"
];

export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      { color: colors },
      { background: colors },
      "blockquote",
      "code-block"
    ],
    [{ direction: "rtl" }, { align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    [{ script: "sub" }, { script: "super" }, "formula"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true
  }
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "code",
  "align",
  "direction",
  "code-block",
  "formula"
];

       // <ReactQuill theme="snow" modules={modules} formats={formats} />
 
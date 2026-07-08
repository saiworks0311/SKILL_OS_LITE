function ResourceCard({ resource }) {
  return (
    <a
      className="resource-btn"
      href={resource.link}
      target="_blank"
      rel="noreferrer"
    >
      {resource.type}
      <br />
      {resource.title}
    </a>
  );
}

export default ResourceCard;
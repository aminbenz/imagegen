import "./styles.css";

export default function ImageSkeleton({ key }) {
  return (
    <div key={key} className="skeleton">
      <div className="loading" />
    </div>
  );
}

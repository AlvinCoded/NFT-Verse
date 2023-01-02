import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="https://images.unsplash.com/photo-1660644807802-497b674c6ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80" alt="" />
        <img src="https://img.freepik.com/free-photo/retro-3d-shapes-vaporwave-style_23-2148981120.jpg?w=2000&t=st=1672365330~exp=1672365930~hmac=af716730a21a486981a9feff7e3758e8641d0641309891a5ef9e717b0ed5f326" alt="" />
        <img src="img/dummy_image/3.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/4.jpg" alt="" />
        <img src="https://img.freepik.com/free-photo/colorful-3d-shapes-vaporwave-style_23-2148981126.jpg?w=2000&t=st=1672365355~exp=1672365955~hmac=0bdd03c13412c894bcd71c00e9c85b6cd9e5e4194f736614e3a65e44807cc6db" alt="" />
        <img src="img/dummy_image/6.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/dummy_image/7.jpg" alt="" />
        <img src="img/dummy_image/8.jpg" alt="" />
        <img src="img/dummy_image/9.jpg" alt="" />
      </div>
    </div>
  )
}

export default BrickLayout
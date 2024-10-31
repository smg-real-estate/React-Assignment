import './styles.css';

const Logo = ({ className = '' }) => (
  <svg 
    viewBox="0 0 266 45" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-label="Hogarth logo"
    className={`logo ${className}`}
  >
    <path fill="#E6007E" d="M11.254 22.499l11.245-11.245 11.245 11.244-11.245 11.246-11.245-11.245z" />
    <path fill="#A71680" d="M22.506 33.753l11.247-11.249L45 33.753 33.753 45 22.506 33.753z" />
    <path fill="#8DA6D6" d="M0 33.753l11.245-11.249 11.249 11.249-11.248 11.246L0 33.753z" />
    <path fill="#F39200" d="M0 11.245L11.246 0l11.248 11.245-11.248 11.249L0 11.245z" />
    <path fill="#F39DAA" d="M22.506 11.245L33.753 0 45 11.245 33.753 22.494 22.506 11.245z" />
    <path fill="#1D1D1B" d="M64.112 13.337h-2.633v-2.993h6.061v9.667c1.44-1.913 3.604-2.668 5.66-2.668 4.869 0 7.285 3.39 7.285 8.185v6.205h2.705v2.993h-8.15v-2.993h2.092v-6.167c0-3.173-1.696-5.052-4.508-5.015-3.067.038-5.049 2.345-5.049 5.267v5.915h2.666v2.993h-8.906v-2.993h2.777V13.337zm29.212 6.925c-3.317 0-5.552 2.417-5.552 5.916 0 3.209 2.199 5.662 5.516 5.662 3.392 0 5.557-2.453 5.591-5.662.036-3.499-2.343-5.916-5.555-5.916m-.036-3.137c5.411 0 9.018 3.788 9.018 9.053 0 5.085-3.643 8.909-9.018 8.909-5.298 0-8.98-3.824-8.98-8.909.039-5.229 3.751-9.053 8.98-9.053m11.219 17.601v-3.104h2.776V20.551h-2.669v-3.03h5.915l.287 2.273c.975-1.804 2.959-2.56 4.728-2.56 2.74 0 4.615.973 5.481 3.499 1.334-2.489 3.571-3.499 5.879-3.499 5.049 0 7.248 3.028 7.248 7.862v6.526h2.742v3.104h-8.654v-3.104h2.522v-6.526c0-2.634-1.045-4.582-3.967-4.582-2.596 0-4.293 2.165-4.293 4.654v6.454h2.599v3.104h-8.656v-3.104h2.633v-6.489c0-2.634-1.298-4.654-4.184-4.654-2.598-.035-4.221 2.127-4.221 4.654v6.454h2.633v3.103h-8.799zm48.006-10.133c-.22-2.851-2.274-4.4-5.195-4.4-2.633 0-5.085 1.583-5.628 4.4h10.823zm2.305 7.536c-1.766 1.982-4.76 2.958-7.39 2.958-5.555 0-9.199-3.643-9.199-9.089 0-5.158 3.75-8.943 9.054-8.943 5.444 0 9.233 3.424 8.582 10.35h-14.103c.29 2.562 2.6 4.435 5.809 4.435 1.767 0 3.966-.648 5.047-1.873l2.2 2.162zm12.914-.902c3.28 0 5.698-2.378 5.698-5.482 0-3.496-2.667-5.483-5.769-5.483-2.851 0-5.774 1.803-5.774 5.41.11 3.573 2.671 5.555 5.845 5.555m-5.807 6.132c.072 3.212 2.777 4.401 5.663 4.434 2.741 0 5.589-.899 5.589-3.712 0-2.344-2.343-3.859-5.516-3.859-5.484 0-9.2-3.211-9.2-8.55 0-5.698 4.689-8.583 9.2-8.583 1.44 0 3.461.361 4.689 1.191l1.873-2.272 2.416 1.947-2.018 2.379c1.441 1.626 2.128 3.176 2.128 5.338 0 2.994-1.409 5.591-4.473 6.782 3.426 1.118 4.4 3.428 4.4 5.555 0 4.544-4.436 6.925-9.125 6.925-5.484 0-9.09-2.886-8.98-7.575h3.354zm21.21-11.11c0 3.463 2.449 5.808 5.66 5.808 3.679 0 5.843-2.596 5.988-5.555.144-3.281-1.948-5.988-5.988-5.988-3.138 0-5.66 2.307-5.66 5.735m17.598 5.411v3.066h-5.735c0 .469-.433-2.814-.433-2.343-1.37 2.162-3.75 2.777-5.948 2.812-5.087 0-8.911-3.391-8.911-9.091 0-5.625 3.968-8.943 8.983-8.943 2.415 0 4.685 1.01 5.984 2.96l.037-2.634h5.915v3.135h-2.562V31.66h2.67zm9.161-19.045v4.944h5.049v2.955h-5.084v8.37c0 1.839.72 2.956 2.45 2.956.724 0 1.446-.218 2.165-.54l.975 2.849c-1.191.507-2.127.756-3.32.794-3.679.107-5.696-2.127-5.696-6.059v-8.37h-3.355v-2.955h3.355v-4.544l3.461-.4zm21.821 11.978c-.215-2.851-2.273-4.4-5.194-4.4-2.632 0-5.085 1.583-5.627 4.4h10.821zm2.308 7.536c-1.767 1.982-4.761 2.958-7.395 2.958-5.555 0-9.196-3.643-9.196-9.089 0-5.158 3.752-8.943 9.053-8.943 5.449 0 9.233 3.424 8.583 10.35h-14.101c.289 2.562 2.596 4.435 5.805 4.435 1.769 0 3.968-.648 5.052-1.873l2.199 2.162zm4.078-5.77c0-.866.609-1.263 1.26-1.263.649 0 1.263.432 1.263 1.263 0 .829-.652 1.261-1.263 1.261-.651 0-1.26-.432-1.26-1.261m13.523-.325c-1.08 1.117-2.489 1.586-3.93 1.586-2.816 0-5.52-1.839-5.52-5.266 0-3.821 2.632-5.299 5.411-5.299 1.296 0 2.526.321 3.679.9l-.11 2.778h-1.803v-1.622c-.47-.184-1.263-.218-1.695-.218-2.092.034-3.389 1.551-3.389 3.5 0 2.163 1.802 3.352 3.497 3.352.902 0 1.911-.289 2.561-1.045l1.299 1.334zm2.776-11.253h-1.55v-1.806h3.57v5.736c.868-1.116 2.13-1.586 3.354-1.586 2.886 0 4.329 2.019 4.329 4.835v3.678h1.623v1.767h-4.833v-1.767h1.226V22.03c0-1.876-1.01-2.993-2.67-2.957-1.804.038-2.993 1.371-2.993 3.103v3.496h1.588v1.769h-5.266v-1.769h1.661V14.781z" />
  </svg>
);

export default Logo; 
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div className="spec-post">
			<h1 className="mb-3 text-4xl leading-tight border-b-4 border-offblack font-jdheader">
				04.04
			</h1>

			<div className="inline-block w-auto px-4 my-4 footnote-wrapper">
				<p className="mb-0 style-override">
					Strictly speaking, not an RFC 7231 compliant error code.
				</p>
			</div>

			<p>
				How ironic; a site dedicated to numbers, and you’re seeing one. Entirely
				the wrong one – 404 is the error code which means we couldn’t find what
				you were looking for.
			</p>

			<p className="mt-4">
				If you think there should be something here – like if you clicked a link
				on this site and arrived here – please{" "}
				<Link to="/contact/">contact me</Link> and I’ll fix it.
				Thanks!&nbsp;&nbsp;:-)
			</p>
		</div>
	</Layout>
)

export default NotFoundPage

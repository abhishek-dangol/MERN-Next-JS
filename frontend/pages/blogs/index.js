import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import React, { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import { API } from "../../config";

const Blogs = () => {
  return (
    <Layout>
      <main>
        <div className="container-fluid">
          <header>
            <div className="col-md-12 pt-3">
              <h1 className="display-4 font-weight-bold">
                Programming Blogs + Tutorials
              </h1>
            </div>
            <section>
              <p>Show Categories and Tags</p>
            </section>
          </header>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">Show All Blogs</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blogs;
